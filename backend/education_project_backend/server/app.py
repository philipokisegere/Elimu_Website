import os
from models import db
from flask import Flask,request,make_response,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import Staff,Course,Department,ProgramType,User,News,Events
from flask_cors import CORS
from flask_admin import Admin
from views import UserAdminView,StaffAdminView,DepartmentAdminView,ProgramAdminView,CourseAdminView,NewsAdminView,EventsAdminView
from auth import auth_bp
from flask_jwt_extended import JWTManager,jwt_required,get_jwt_identity
from flask_restful import Api,Resource
from sqlalchemy.exc import IntegrityError



app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///education.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')


migrate = Migrate(app, db)
db.init_app(app)
CORS(app)
api = Api(app)
jwt = JWTManager()
jwt.init_app(app)

admin = Admin(app, name='Admin Dashboard', template_mode='bootstrap4')

admin.add_view(UserAdminView(User, db.session))
admin.add_view(StaffAdminView(Staff, db.session))
admin.add_view(DepartmentAdminView(Department, db.session))
admin.add_view(ProgramAdminView(ProgramType, db.session))
admin.add_view(CourseAdminView(Course, db.session))
admin.add_view(NewsAdminView(News, db.session))
admin.add_view(EventsAdminView(Events, db.session))

# register blueprint
app.register_blueprint(auth_bp, url_prefix='/auth')


@app.route('/')
def index():
    return 'Welcome to Education Limitless'
# jwt error handler
@jwt.expired_token_loader
def expired_token(jwt_header,jwt_data):
    return jsonify({'error': 'The token has expired.','error':'token expired'}), 401

@jwt.invalid_token_loader
def invalid_token(error):
    return jsonify({'error': 'Does not contain a valid token.','error':'invalid token'}), 401

@jwt.unauthorized_loader
def missing_token(error):
    return jsonify({'error': 'Request does not contain an access token.', 'error':'token missing'}), 401


# user routes
class UpdateUser(Resource):
    @jwt_required()
    def patch(self):
        try:
            data = request.get_json()
            current_user = get_jwt_identity()
            user = User.query.filter_by(id=current_user).first()
            nationalId = data.get('nationalId')
            address = data.get('address')

            if nationalId:
                user.nationalId = nationalId
            if address:
                user.address = address
            db.session.commit()
            response = make_response(user.serialize(), 200)
            return response
        except Exception as e:
            return jsonify({'error': str(e)})
# staff route
class getStaff(Resource):
    def get(self):
        try:
            staff = Staff.query.all()
            response = make_response(jsonify([staff.serialize() for staff in staff]), 200)
            return response
        except Exception as e:
            return jsonify({'error': str(e)})


@app.route('/poststaff', methods=['POST'])
def postnw():
    try:
        data = request.get_json()
        staffName = data.get('staffName')
        staffEmail = data.get('staffEmail')
        department_id = data.get('department_id')
        
        staff = Staff(staffName=staffName, staffEmail=staffEmail, department_id=department_id)
        
        db.session.add(staff)
        db.session.commit()
        response = make_response(jsonify(staff.serialize()), 200)
        return response
    except IntegrityError as e:
        db.session.rollback()
        return make_response(jsonify({"error": str(e.orig)}), 400)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)
    
# department
@app.route('/getdepartment', methods=['GET'])
def getdepartment():
    try:
        department = Department.query.all()
        depart_dict = [dep.serialize() for dep in department]
        response = make_response(jsonify(depart_dict), 200)
        return response
    except Exception as e:
        return jsonify({'error': str(e)})
    
@app.route('/postdepartment', methods=['POST'])
def postdepartment():
    try:
        data = request.get_json()
        departmentName = data.get('departmentName')
        department = Department(departmentName=departmentName)

        db.session.add(department)
        db.session.commit()
        response = make_response(jsonify(department.serialize()), 200)
        return response
    except IntegrityError as e:
        db.session.rollback()
        return make_response(jsonify({"error": str(e.orig)}), 400)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)

# program type routes
@app.route('/getprogramtype', methods=['GET'])
def getprogramtype():
    try:
        programType = ProgramType.query.all()
        response = make_response(jsonify([programType.serialize() for programType in programType]), 200)
        return response
    except Exception as e:
        return jsonify({'error': str(e)})
@app.route('/postprogramtype', methods=['POST'])
def postprogramtype():
    try:
        data = request.get_json()
        programName= data.get('programName')
        department = data.get('department_id')
        programType = ProgramType(programName=programName,department_id = department)

        db.session.add(programType)
        db.session.commit()
        response = make_response(jsonify(programType.serialize()), 200)
        return response
    except IntegrityError as e:
        db.session.rollback()
        return make_response(jsonify({"error": str(e.orig)}), 400)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)
    
# course routes
@app.route('/getcourse', methods=['GET'])
def getcourse():
    try:
        course = Course.query.all()
        response = make_response(jsonify([course.serialize() for course in course]), 200)
        return response
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/postcourse', methods=['POST'])
def postcourse():
    try:
        data = request.get_json()
        courseName = data.get('courseName')
        description = data.get('description')
        department = data.get('department_id')
        programType = data.get('programType_id')

        course = Course(courseName=courseName,description = description, department_id=department, program_id=programType)

        db.session.add(course)
        db.session.commit()
        response = make_response(jsonify(course.serialize()), 200)
        return response
    except IntegrityError as e:
        db.session.rollback()
        return make_response(jsonify({"error": str(e.orig)}), 400)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)

# event route
@app.route('/getevent', methods=['GET'])
def getevent():
    try:
        event = Events.query.all()
        response = make_response(jsonify([event.serialize() for event in event]), 200)
        return response
    except Exception as e:
        return jsonify({'error': str(e)})

# news route
@app.route('/getnews', methods=['GET'])
def getnews():
    try:
        news = News.query.all()
        response = make_response(jsonify([news.serialize() for news in news]), 200)
        return response
    except Exception as e:
        return jsonify({'error': str(e)})



                             
api.add_resource(getStaff, '/staff')
api.add_resource(UpdateUser, '/user')




if __name__ == '__main__':
    app.run(debug=True, port=5000)


