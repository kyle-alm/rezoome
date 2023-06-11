from django.db import models
from django.contrib.auth.models import User
from core.models import Template

# Create your models here.
class Resume(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

class ResumeTitle(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)

class SummarySnippet(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    snippet = models.TextField()

class Experience(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    company = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    start_date = models.DateField(blank=True)
    end_date = models.DateField(blank=True)
    is_current = models.BooleanField(default=False)

class ExperienceTitle(models.Model):
    experience = models.ForeignKey(Experience, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)

class ExperienceSnippet(models.Model):
    experience = models.ForeignKey(Experience, on_delete=models.CASCADE)
    snippet = models.TextField()

class Education(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    school = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    start_date = models.DateField(blank=True)
    end_date = models.DateField(blank=True)
    is_current = models.BooleanField(default=False)
    degree_type = models.CharField(max_length=255 blank=True)
    degree_field = models.CharField(max_length=255 blank=True)
    gpa = models.FloatField(blank=True)

class Project(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    link = models.CharField(max_length=255, blank=True)
    role = models.CharField(max_length=255, blank=True)

class ProjectSnippet(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    snippet = models.TextField()

class Skill(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    skill = models.CharField(max_length=255)

class Interest(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    interest = models.CharField(max_length=255)

class Award(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    award = models.CharField(max_length=255)

class Language(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    language = models.CharField(max_length=255)

class Reference(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255, blank=True)
    company = models.CharField(max_length=255, blank=True)
    phone_number = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)
    relationship = models.CharField(max_length=255, blank=True)
    reference_type = models.CharField(max_length=255, blank=True)

class Layout(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    template = models.ForeignKey(Template, on_delete=models.SET_NULL, null=True)
    primary_color = models.CharField(max_length=8, blank=True)
    secondary_color = models.CharField(max_length=8, blank=True)

