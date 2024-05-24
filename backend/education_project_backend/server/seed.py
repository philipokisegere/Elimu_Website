from app import app
from models import User, Staff,ProgramType,Department,Course,News,Events,db
from datetime import datetime

with app.app_context():
    db.session.query(User).delete()
    db.session.query(Staff).delete()
    db.session.query(ProgramType).delete()
    db.session.query(Department).delete()
    db.session.query(Course).delete()
    db.session.query(News).delete()
    db.session.query(Events).delete()
    db.session.commit()

# seed data for users 
    users = [
       {
          "firstName":"james",
          "lastName":"kimani",
          "email":"jameskamotho21@gmail.com",
          "password":"12345",
          "nationalId":"12314212",
          "phoneNumber":"0776123456",
          "address":"Nairobi"
       },
       {
          "firstName":"john",
          "lastName":"kamau",
          "email":"john23@gmail.com",
          "password":"12345",
          "nationalId":"44342232",
          "phoneNumber":"0723123645",
          "address":"Nairobi"
       },

    ]
    for data in users:
        new_user = User(**data)
        db.session.add(new_user)
        db.session.commit()

#   seed data for departments 
    departments = [
        {
            "departmentName":"ICT",
        },
        {
            "departmentName":"Mathematics And Physics ",
        },
        {
            "departmentName":"Engeneering",
        },
        {
            "departmentName":"Information Science",
        },
        {
            "departmentName":"Business",
        },
        {
            "departmentName":"Accounting",
        },
              
    ]

    for dep in departments:
        new_dep = Department(**dep)
        db.session.add(new_dep)
        db.session.commit()
# seed data for staff
    staff = [
        {
            "staffName":"James Kamotho",
            "staffEmail":"jameedu1@gmail.com",
            "department_id":1,
        },
        {
            "staffName":"Ester Mbuthia",
            "staffEmail":"estermbedu23@gmail.com",
            "department_id":2,
        },
        {
            "staffName":"John Kamau",
            "staffEmail":"johnedu@gmail.com",
            "department_id":3,
        },
        {
            "staffName":"Kamau Mbugua",
            "staffEmail":"mbuguakmedu@gmail.com",
            "department_id":4,
        },
        {
            "staffName":"Clement Mwangi",
            "staffEmail":"clementedu31@gmail.com",
            "department_id":5,
        },
        {
            "staffName":"Joseph Mbuthia",
            "staffEmail":"josephmbuthedu12@gmail.com",
            "department_id":6,
        },
        {
            "staffName":"Yusuf  Kamau",
            "staffEmail":"yusuf56@gmail.com",
            "department_id":1,
        },
        {
            "staffName":"Walter Kimani",
            "staffEmail":"walter12@gmail.com",
            "department_id":2,
        }
        


        
    ]

    for data in staff:
        new_staff = Staff(**data)
        db.session.add(new_staff)
        db.session.commit()

 # Seed data for Events
    events = [
        Events(title="Tech Conference", date=datetime(2024, 9, 25), description="Conference on the latest in technology"),
        Events(title="Cisco Networking Bootcamp", date=datetime(2024, 10, 1), description="Intensive bootcamp on Cisco networking"),
        Events(title="Microsoft Certification Workshop", date=datetime(2024, 11, 10), description="Workshop for Microsoft Office certification"),
        Events(title="Full Stack Development Boot Camp", date=datetime(2024, 12, 5), description="Full Stack Development Boot Camp"),
        Events(title="Music Festival", date=datetime(2024, 5, 20), description="Annual music festival"),
        Events(title="Science Fair", date=datetime(2024, 6, 15), description="Science and technology fair"),
        Events(title="Maths Competition", date=datetime(2024, 7, 10), description="Inter-school mathematics competition"),
        
    ]

    for event in events:
        db.session.add(event)
    
    db.session.commit()

    # Seed data for News
    news_items = [
        News(title="New Course Announced", date=datetime(2024, 5, 1), description="New course on AI and ML announced"),
        News(title="Scholarship Program", date=datetime(2024, 6, 20), description="New scholarship program for underprivileged students"),
        News(title="Research Grant", date=datetime(2024, 7, 30), description="Grant received for renewable energy research"),
        News(title="New Dean Appointed", date=datetime(2024, 8, 15), description="New dean appointed for the Faculty of Science"),
        News(title="Campus Expansion", date=datetime(2024, 9, 10), description="New buildings added to the campus")
    ]

    for news in news_items:
        db.session.add(news)
    
    db.session.commit()
    db.session.commit()


    program_types = [
        ProgramType(programName='Diploma', department_id=1),
        ProgramType(programName='Bachelors', department_id=1),
        ProgramType(programName='Masters', department_id=1),
        ProgramType(programName='Certificate', department_id=2),
        ProgramType(programName='PhD', department_id=3)
    ]
    db.session.add_all(program_types)
    db.session.commit()

    courses = [
        Course(courseName="Cisco Networking Academy", description="Cisco networking fundamentals", department_id=1, program_id=2),
        Course(courseName="Microsoft Office Specialist", description="Microsoft Office skills", department_id=2, program_id=3),
        Course(courseName="Boot Camp: Full Stack Development", description="Intensive coding boot camp", department_id=1, program_id=1),
        Course(courseName='Calculus I', description='Intro to Calculus', department_id=2, program_id=5),
        Course(courseName='Financial Accounting', description='Basics of Financial Accounting', department_id=1, program_id=4),
        Course(courseName='Advanced ICT', description='Advanced topics in ICT', department_id=4, program_id=4),
        Course(courseName="Diploma in Mathematics", description="Mathematics Fundamentals", department_id=3, program_id=1),
    ]
    db.session.add_all(courses)
    db.session.commit()



    print("seeding done")


   

