from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username= db.Column(db.String(120))
    name= db.Column(db.String(120), unique=False)
    surname= db.Column(db.String(120), unique=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    img_profile = db.Column(db.String(255))
    is_active = db.Column(db.Boolean(), unique=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "name": self.name,
            "surname": self.surname,
            "img_profile": self.img_profile
            # do not serialize the password, its a security breach
        }