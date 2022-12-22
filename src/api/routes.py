"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    list_users = []
    for user in users:
        list_users.append(user.serialize())

    return jsonify(list_users)
@api.route('/login', methods=['POST'])
def get_login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    user = User.query.filter_by(email=email, password=password).first()

    if user == None:
        return jsonify({'msg': 'Contraseña o email incorrecto'})
    access_token = create_access_token(identity=email)
    response = {"msg": "Credenciales correctas", "token": access_token, "username": user.username}
    return jsonify(response)

@api.route('signup', methods=['POST'])
def get_signup():
    data = request.data
    data = json.loads(data)
    user_signup = User(
        username= data['username'],
        name=data['name'],
        surname=data['surname'],
        email= data['email'],
        password= data['password'],

    )

    db.session.add(user_signup)
    db.session.commit()
    response_signup= {'msg': 'Usuario creado correctamente' }#user_signup.serialize() for user in user_signup}

    return jsonify(response_signup)


@api.route('/<string:username>', methods=['GET'])
# @jwt_required()
def get_user_username(username):
    user = db.session.query(User).filter(User.username == username).first()    

    return jsonify(user.serialize())