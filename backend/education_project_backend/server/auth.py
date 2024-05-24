from models import User,db,bcrypt
from flask_jwt_extended import create_access_token,create_refresh_token, get_jwt_identity,jwt_required,get_jwt
from flask import  Blueprint, jsonify, request, make_response
import re


auth_bp = Blueprint("auth", __name__)

# signup for user 
@auth_bp.route("/user/register", methods=["POST"])
def register_user():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid request data"}), 400

    # Extracting user data from request
    firstName = data.get('firstName')
    lastName = data.get('lastName')
    email = data.get('email')
    phoneNumber = data.get('phoneNumber')
    hashed_password = data.get('password')

    # Validating if required fields are present
    if not all([firstName, lastName, email, phoneNumber, hashed_password]):
        return jsonify({"error": "Missing required fields"}), 400

    # email should be  unique
    existing_email = User.query.filter_by(email=email).first()
    if existing_email:
        return jsonify({"error": "Email already exists"}), 400

    existing_phone_number = User.query.filter_by(phoneNumber=phoneNumber).first()
    if existing_phone_number:
        return jsonify({"error": "Phone number already exists"}), 404
    try:
        # Creating new user instance
        new_user = User(firstName=firstName,
                        lastName=lastName,
                        email=email,
                        phoneNumber=phoneNumber,
                        password=hashed_password)

        # Adding user to the database
        db.session.add(new_user)
        db.session.commit()
        return jsonify({
            "message": "User registered successfully",
            "user":new_user.serialize()
        }), 200
    except  Exception as e:
        print("Error in user register route: ", str(e))
        return jsonify({"error": "Failed to create account"}), 500

# login for user
@auth_bp.route('/user/login', methods=["POST"])
def login(): 
    data = request.get_json()
    email = data.get('email')

    if re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email):
        # user login
        user = User.query.filter_by(email=email, isActive = True).first()
    
    if not user:
        return jsonify({'error': 'User not registered'}), 401 
    
    if user.role in ('User', 'Admin'):
        if not bcrypt.check_password_hash(user.hashed_password, data.get('password')):
            return jsonify({'error': 'Invalid credentials'}), 401 

        access_token = create_access_token(identity=user.id)
        refresh_token = create_refresh_token(identity=user.id)  
        
        return jsonify({
            "message": 'Welcome {}'.format(user.firstName),
            "tokens": {
                "access": access_token,
                "refresh": refresh_token
            },
            "user": user.serialize()
        }), 200
    else: 
        return jsonify({'error':'Unauthorized user'}), 401


