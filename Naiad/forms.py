from flask_wtf import Form
from wtforms import PasswordField, StringField, BooleanField
from wtforms import validators
from wtforms.validators import DataRequired
from wtforms.validators import Length, Email
from Naiad.models import User


class LoginForm(Form):
    username = StringField(u'Username', validators=[validators.required()])
    password = PasswordField(u'Password', validators=[validators.optional()])

    def validate(self):
        check_validate = super(LoginForm, self).validate()

        # if our validators do not pass
        if not check_validate:
            return False

        # Does our the exist
        user = User.query.filter_by(username=self.username.data).first()
        if not user:
            self.username.errors.append('Invalid username or password')
            return False

        # Do the passwords match
        if not user.check_password(self.password.data):
            self.username.errors.append('Invalid username or password')
            return False

        return True


class SignupForm(Form):
    email = StringField('Email address',
                        validators=[DataRequired('Please provide a valid email address'),
                                    Length(min=6, message=(u'Email address too short')),
                                    Email(message=(u'That\'s not a valid email address.'))])
    password = PasswordField('Pick a secure password',
                             validators=[DataRequired(),
                                         Length(min=6,
                                                message=(u'Please give a longer password'))])
    username = StringField('Choose your username', validators=[DataRequired()])
    agree = BooleanField('I agree all your Terms of Services',
                         validators=[DataRequired(u'You must accept our Terms of Service')])
