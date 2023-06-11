from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20, blank=True)
    address = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zipcode = models.CharField(max_length=10, blank=True)
    website = models.CharField(max_length=255, blank=True)
    portfolio = models.CharField(max_length=255, blank=True)
    linkedin = models.CharField(max_length=255, blank=True)
    github = models.CharField(max_length=255, blank=True)
    twitter = models.CharField(max_length=255, blank=True)
    instagram = models.CharField(max_length=255, blank=True)
    facebook = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.full_name
    
class Template(models.Model):
    template_name = models.CharField(max_length=255)
    template = models.TextField()

    def __str__(self):
        return self.template_name