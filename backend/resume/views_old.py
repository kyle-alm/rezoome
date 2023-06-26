from django.shortcuts import render
from models import Resume, ResumeTitle, SummarySnippet, Experience, ExperienceTitle, ExperienceSnippet, Education, Project, ProjectSnippet, Skill, Interest, Award, Language, Certification, Reference, Layout

def get_user_resume(request):
    user = request.user
    resume = Resume.objects.get(user=user)
    return resume

def create_user_resume(request):
    user = request.user
    resume = Resume.objects.create(user=user)
    return resume

def update_user_resume(request, resume_id):
    user = request.user
    # check if resume_id is valid and belongs to user
    
    resume = Resume.objects.get(user=user, id=resume_id)
    return resume

def get_resume_titles(request):
    resume = get_user_resume(request)
    resume_titles = resume.resume_titles.all()
    return resume_titles

def create_resume_title(request, title):
    resume = get_user_resume(request)
    resume_title = ResumeTitle.objects.create(resume=resume, title=title)
    return resume_title

def get_summary_snippets(request):
    resume = get_user_resume(request)
    summary_snippets = resume.summary_snippets.all()
    return summary_snippets

def create_summary_snippet(request, snippet):
    resume = get_user_resume(request)
    summary_snippet = SummarySnippet.objects.create(resume=resume, snippet=snippet)
    return summary_snippet

def get_experiences(request):
    resume = get_user_resume(request)
    experiences = resume.experience_items.all()
    return experiences

def create_experience(request, company, city, state, start_date, end_date, is_current):
    resume = get_user_resume(request)
    experience = Experience.objects.create(
        resume=resume, 
        company=company, 
        city=city, 
        state=state, 
        start_date=start_date, 
        end_date=end_date, 
        is_current=is_current
        )
    return experience

def get_experience_title(experience):
    experience_titles = experience.experience_titles.all()
    return experience_titles

def create_experience_title(experience, title):
    experience_title = ExperienceTitle.objects.create(experience=experience, title=title)
    return experience_title

def get_experience_snippets(experience):
    experience_snippets = experience.experience_snippets.all()
    return experience_snippets

def create_experience_snippet(experience, snippet):
    experience_snippet = ExperienceSnippet.objects.create(experience=experience, snippet=snippet)
    return experience_snippet

def get_education(request):
    resume = get_user_resume(request)
    education_items = resume.education_items.all()
    return education_items

def create_education(request, school, city, state, start_date, end_date, is_current, degree_type, degree_field, gpa):
    resume = get_user_resume(request)
    education = Education.objects.create(
        resume=resume, 
        school=school, 
        city=city, 
        state=state, 
        start_date=start_date, 
        end_date=end_date, 
        is_current=is_current, 
        degree_type=degree_type, 
        degree_field=degree_field, 
        gpa=gpa
        )
    return education

def get_project(request):
    resume = get_user_resume(request)
    projects = resume.projects.all()
    return projects

def create_project(request, name, start_date, end_date, url, role):
    resume = get_user_resume(request)
    project = Project.objects.create(
        resume=resume, 
        name=name, 
        start_date=start_date, 
        end_date=end_date, 
        url=url,
        role=role
        )
    return project

def get_project_snippet(project):
    project_snippets = project.project_snippets.all()
    return project_snippets

def create_project_snippet(project, snippet):
    project_snippet = ProjectSnippet.objects.create(project=project, snippet=snippet)
    return project_snippet

def get_skill(request):
    resume = get_user_resume(request)
    skills = resume.skills.all()
    return skills

def create_skill(request, name):
    resume = get_user_resume(request)
    skill = Skill.objects.create(resume=resume, name=name)
    return skill

def get_interest(request):
    resume = get_user_resume(request)
    interests = resume.interests.all()
    return interests

def create_interest(request, name):
    resume = get_user_resume(request)
    interest = Interest.objects.create(resume=resume, name=name)
    return interest

def get_award(request):
    resume = get_user_resume(request)
    award = resume.awards.all()
    return award

def create_award(request, name, date):
    resume = get_user_resume(request)
    award = Award.objects.create(resume=resume, name=name, date=date)
    return award

def get_language(request):
    resume = get_user_resume(request)
    language = resume.languages.all()
    return language

def create_language(request, name):
    resume = get_user_resume(request)
    language = Language.objects.create(resume=resume, name=name)
    return language

def get_certification(request):
    resume = get_user_resume(request)
    certification = resume.certifications.all()
    return certification

def create_certification(request, name, certification_details, certification_date):
    resume = get_user_resume(request)
    certification = Certification.objects.create(
        resume=resume, 
        name=name, 
        certification_date=certification_date, 
        certification_details=certification_details
        )
    return certification

def get_reference(request):
    resume = get_user_resume(request)
    reference = resume.references.all()
    return reference

def create_reference(request, name, title, company, phone_number, email, relationship, reference_type):
    resume = get_user_resume(request)
    reference = Reference.objects.create(
        resume=resume, 
        name=name, 
        title=title, 
        company=company, 
        phone_number=phone_number, 
        email=email, 
        relationship=relationship, 
        reference_type=reference_type
        )
    return reference

def get_layouts(request):
    resume = get_user_resume(request)
    layouts = resume.layouts.all()
    return layouts

def create_layout(request, name):
    resume = get_user_resume(request)
    layout = Layout.objects.create(resume=resume, name=name)
    return layout
