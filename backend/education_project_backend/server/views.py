from flask_admin.contrib.sqla import ModelView

class  UserAdminView(ModelView):
    column_sortable_list=('created_at','firstName','lastName')
    column_searchable_list = ('firstName','lastName','email','phoneNumber','nationalId', 'role')
    column_list=('id','firstName','lastName','email','phoneNumber','nationalId','address','isActive', 'role','created_at')
    column_labels=dict(name= 'Name',email="Email",isActive = 'isActive', role ='Role')
    column_filters=column_list

class StaffAdminView(ModelView):
    column_sortable_list = ('created_at','staffName')
    column_searchable_list = ('staffName', 'staffEmail','department_id')
    column_list = ('id', 'staffName', 'staffEmail','department_id','created_at')
    column_labels = dict(staffName='Staff Name', staffEmail='Staff Email',department_id='Department')
    column_filters = column_list

class DepartmentAdminView(ModelView):
    column_sortable_list = ('created_at', 'departmentName')
    column_searchable_list = ('departmentName',)
    column_list = ('id', 'departmentName', 'created_at')
    column_labels = dict(departmentName='Department Name')
    column_filters = column_list

class ProgramAdminView(ModelView):
    column_sortable_list = ('created_at', 'programName')
    column_searchable_list = ('programName',)
    column_list = ('id', 'programName','department_id', 'created_at')
    column_labels = dict(programName='ProgramName', department_id='Department')
    column_filters = column_list

class CourseAdminView(ModelView):
    column_sortable_list = ('created_at', 'courseName')
    column_searchable_list = ('courseName',)
    column_list = ('id', 'courseName','description', 'program_id','department_id','created_at')
    column_labels = dict(courseName='CourseName', description='Description', program_id='Program', department_id='Department')
    column_filters = column_list

class NewsAdminView(ModelView):
    column_sortable_list = ('created_at', 'title')
    column_searchable_list = ('title', 'description')
    column_list = ('id', 'title', 'description','date', 'created_at')
    column_labels = dict(title='Title', description='Description',date='date')
    column_filters = column_list

class EventsAdminView(ModelView):
    column_sortable_list = ('created_at', 'title')
    column_searchable_list = ('title', 'description')
    column_list = ('id', 'title', 'description','date', 'created_at')
    column_labels = dict(title='Title', description='Description',date='date')
    column_filters = column_list


