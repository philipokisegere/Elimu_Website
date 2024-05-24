from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from flask_bcrypt import Bcrypt
import re

db=SQLAlchemy()
bcrypt=Bcrypt()

# user, academics,staff,

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(100), nullable=False)
    lastName = db.Column(db.String(100))
    email = db.Column(db.String(254), unique=True, nullable=False)
    hashed_password = db.Column(db.String(128), nullable=False)
    nationalId = db.Column(db.Integer)
    phoneNumber = db.Column(db.String, unique=True,nullable=False)
    isActive = db.Column(db.Boolean(), default=True)
    address = db.Column(db.String())
    role= db.Column(db.String(), default= 'User', nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now(), nullable=True)

    
    
    @validates('email')
    def validate_fields(self, key, value):
        if not re.match("[^@]+@[^@]+\.[^@]+", value):
            raise ValueError("E-mail not valid!!")
        return value

     # Password getter and setter methods
    @hybrid_property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, plain_text_password):
        self.hashed_password = bcrypt.generate_password_hash(
            plain_text_password.encode('utf-8')).decode('utf-8')

    def check_password(self, attempted_password):
        return bcrypt.check_password_hash(self.hashed_password, attempted_password.encode('utf-8'))
    
    def serialize(self):
        return {
            'id': self.id,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'email': self.email,
            'nationalId': self.nationalId,
            'phoneNumber': self.phoneNumber,
            'isActive': self.isActive,
            'role': self.role,
            'address': self.address,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
           
        }
    def __repr__ (self):
        return f"ID:{self.id} FirstName:{self.firstName}, LastName:{self.lastName},  Email:{self.email}, Phone Number:{self.phoneNumber}"

class ProgramType(db.Model,SerializerMixin):
    __tablename__ = 'program_type'

    id = db.Column(db.Integer, primary_key = True)
    programName = db.Column(db.String)
    # relationship to course
    courses = db.relationship('Course', backref='program_type')
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now(), nullable=True)


    def serialize(self):
        return{
            'id':self.id,
            'programName':self.programName,
            'department_id':self.department_id,
            'created_at':self.created_at,
            'updated_at':self.updated_at,
            'courses':[c.serialize() for c in self.courses],

        }
    def __repr__(self):
        return f"ID:{self.id} programName:{self. programName}"
    
class Course(db.Model,SerializerMixin):
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    courseName = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    img_url = db.Column(db.String)
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'))
    program_id = db.Column(db.Integer, db.ForeignKey('program_type.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now(), nullable=True)

    def serialize(self):
        return {
            'id': self.id,
            'courseName': self.courseName,
            'description': self.description,
            'img_url': self.img_url,
            'program_id': self.program_id,
            'department_id': self.department_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
    
    def __repr__(self):
        return f"ID:{self.id} courseName:{self.courseName} Description:{self.description},Department:{self.department_id},Image_url:{self.img_url}"
    
    
class Department(db.Model, SerializerMixin):
    __tablename__ = 'departments'

    id = db.Column(db.Integer, primary_key=True)
    departmentName = db.Column(db.String, nullable=False)
    courses = db.relationship('Course', backref='department')
    program_type = db.relationship('ProgramType', backref='department')
    staff = db.relationship('Staff', backref='department')
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now(), nullable=True)

    def serialize(self):
        return {
            'id': self.id,
            'departmentName': self.departmentName,
            'courses':[c.serialize()for c in self.courses],
            'program_type':[p.serialize()for p in self.program_type],
            'staff':[s.serialize()for s in self.staff]
        }

    def __repr__ (self):
        return f"ID:{self.id}, Name:{self.departmentName}"

class Staff(db.Model,SerializerMixin):
    __tablename__ = 'staffs'

    id = db.Column(db.Integer, primary_key=True)
    staffName = db.Column(db.String(100), nullable=False)
    staffEmail = db.Column(db.String(254), unique=True, nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    img_url = db.Column(db.String)
    updated_at = db.Column(db.DateTime, onupdate=db.func.now(), nullable=True)

    def serialize(self):
        return {
            'id': self.id,
            'staffName': self.staffName,
            'staffEmail': self.staffEmail,
            'department_id': self.department_id,
            'img_url': self.img_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'department':{
                'id':self.department.id,
                'departmentName':self.department.departmentName
            }
        }

    def __repr__ (self):
        return f"ID:{self.id}, Name:{self.staffName}, Email:{self.staffEmail}, Department:{self.department_id}"

class Events(db.Model, SerializerMixin):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    description = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now(), nullable=True)

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'date': self.date,
            'description': self.description,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

    def __repr__ (self):
        return f"ID:{self.id}, Title:{self.title}, Date:{self.date}, Description:{self.description}"
    
class News(db.Model, SerializerMixin):
    __tablename__ = 'news'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    description = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now(), nullable=True)

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'date': self.date,
            'description': self.description,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

    def __repr__ (self):
        return f"ID:{self.id}, Title:{self.title}, Date:{self.date}, Description:{self.description}"


        