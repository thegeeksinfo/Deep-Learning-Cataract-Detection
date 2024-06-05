from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from auditlog.registry import auditlog
from django.contrib.auth.hashers import make_password
from django.db.models.signals import post_save

class CustomUserManager(BaseUserManager): #overriding the custom manager
    # such that the email field is used as the unique identifier and username can be foregone 
    # even for the superuser
    def create_user(self, email, password, username, **extra_fields):
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        if password is not None:
            user.set_password(password)
        else:
            user.set_unusable_password()
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None):
        user = self.create_user(email, username, password)
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    @property
    def is_staff(self):
        return self.is_admin


auditlog.register(User)