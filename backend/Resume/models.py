from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager

class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    email = models.EmailField(unique=True)

    objects = CustomUserManager()


class UserProfile(models.Model):
    user = models.OneToOneField('resume.User', on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=20, blank=True)
    address = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zipcode = models.CharField(max_length=10, blank=True)
    website = models.URLField(max_length=255, blank=True)
    portfolio = models.URLField(max_length=255, blank=True)
    linkedin = models.URLField(max_length=255, blank=True)
    github = models.URLField(max_length=255, blank=True)
    twitter = models.URLField(max_length=255, blank=True)
    instagram = models.URLField(max_length=255, blank=True)
    facebook = models.URLField(max_length=255, blank=True)

    resume_progress = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return self.full_name
    
class Template(models.Model):
    template_name = models.CharField(max_length=255)
    template = models.TextField()

    def __str__(self):
        return self.template_name

class Resume(models.Model):
    user = models.OneToOneField('resume.User', on_delete=models.CASCADE)

class ResumeTitle(models.Model):
    resume = models.ForeignKey(Resume, related_name='resume_titles', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)

class SummarySnippet(models.Model):
    resume = models.ForeignKey(Resume, related_name='summary_snippets', on_delete=models.CASCADE)
    snippet = models.TextField()

class Experience(models.Model):
    resume = models.ForeignKey(Resume, related_name='experience_items', on_delete=models.CASCADE)
    company = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    start_date = models.DateField(blank=True)
    end_date = models.DateField(blank=True)
    is_current = models.BooleanField(default=False)

class ExperienceTitle(models.Model):
    experience = models.ForeignKey(Experience, related_name='experience_titles',  on_delete=models.CASCADE)
    title = models.CharField(max_length=255)

class ExperienceSnippet(models.Model):
    experience = models.ForeignKey(Experience, related_name='experience_snippets', on_delete=models.CASCADE)
    snippet = models.TextField()

class Education(models.Model):
    resume = models.ForeignKey(Resume, related_name='education_items',  on_delete=models.CASCADE)
    school = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    start_date = models.DateField(blank=True)
    end_date = models.DateField(blank=True)
    is_current = models.BooleanField(default=False)
    degree_type = models.CharField(max_length=255, blank=True)
    degree_field = models.CharField(max_length=255, blank=True)
    gpa = models.FloatField(blank=True)

class Skill(models.Model):
    resume = models.ForeignKey(Resume, related_name='skills', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

class Layout(models.Model):
    resume = models.ForeignKey(Resume, related_name='layouts', on_delete=models.CASCADE)
    template = models.ForeignKey(Template, on_delete=models.SET_NULL, null=True)
    primary_color = models.CharField(max_length=8, blank=True)
    secondary_color = models.CharField(max_length=8, blank=True)

