from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.
user_type = (
    ('Doctor','DOCTOR'),
    ('Patient', 'PATIENT'),
)

post_category = (
    ('Mental Health','MENTAL HEALTH'),
    ('Heart Disease', 'HEART DISEASE'),
    ('Covid19', 'COVID19'),
    ('Immunization', 'IMMUNIZATION'),
)

class CustomManager(BaseUserManager):


    def create_user(self, username,email,password, **other_fields):
        user=self.model(username=username,email=email,**other_fields )
        user.set_password(password)
        user.save()
        return user
        
    def create_superuser(self, username, email,password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        return self.create_user(username,email,password, **other_fields)

class Newuser(AbstractBaseUser, PermissionsMixin):
    username=models.CharField(max_length=100, unique=True)
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    profilepic=models.ImageField(upload_to="profilepics")
    email=models.EmailField(max_length=254, unique=True)
    password=models.CharField(max_length=300)
    address=models.TextField()
    is_staff=models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)

    object=CustomManager()

    USERNAME_FIELD='username'
    REQUIRED_FIELDS=['email']

    def __str__(self):
        return self.username


class post(models.Model):
    title=models.CharField(max_length=255)
    postimg=models.ImageField(upload_to="postimges")
    categories=models.CharField(max_length=100, choices=post_category, default='Mental Health')
    summary=models.TextField()
    content=models.TextField()
    is_draft=models.BooleanField(default=False)

    
   

    

    

   
