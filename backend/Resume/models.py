from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255)
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

    resume_progress = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return self.full_name
    
class Template(models.Model):
    template_name = models.CharField(max_length=255)
    template = models.TextField()

    def __str__(self):
        return self.template_name

class Resume(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

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

class Project(models.Model):
    resume = models.ForeignKey(Resume, related_name='projects',  on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    start_date = models.DateField(blank=True)
    end_date = models.DateField(blank=True)
    url = models.CharField(max_length=255, blank=True)
    role = models.CharField(max_length=255, blank=True)

class ProjectSnippet(models.Model):
    project = models.ForeignKey(Project, related_name='project_snippets',  on_delete=models.CASCADE)
    snippet = models.TextField()

class Skill(models.Model):
    resume = models.ForeignKey(Resume, related_name='skills', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

class Interest(models.Model):
    resume = models.ForeignKey(Resume, related_name='interests',  on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

class Award(models.Model):
    resume = models.ForeignKey(Resume, related_name='awards', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    date = models.DateField(blank=True)

class Language(models.Model):
    resume = models.ForeignKey(Resume, related_name='languages', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    PROFICIENCY_CHOICES = [('Basic', 'Basic'), ('Conversational', 'Conversational'), ('Fluent', 'Fluent'), ('Native', 'Native/Bilingual')]
    proficiency = models.CharField(max_length=255, blank=True, choices=PROFICIENCY_CHOICES)

class Certification(models.Model):
    resume = models.ForeignKey(Resume, related_name='certifications',  on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    details = models.TextField(blank=True)
    date = models.DateField(blank=True)

class Reference(models.Model):
    resume = models.ForeignKey(Resume, related_name='references', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255, blank=True)
    company = models.CharField(max_length=255, blank=True)
    phone_number = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)
    relationship = models.CharField(max_length=255, blank=True)

class Layout(models.Model):
    resume = models.ForeignKey(Resume, related_name='layouts', on_delete=models.CASCADE)
    template = models.ForeignKey(Template, on_delete=models.SET_NULL, null=True)
    primary_color = models.CharField(max_length=8, blank=True)
    secondary_color = models.CharField(max_length=8, blank=True)

