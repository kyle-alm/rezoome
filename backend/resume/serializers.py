from django.contrib.auth.models import User
from resume.models import UserProfile, Template, Resume, ResumeTitle, SummarySnippet, Experience, ExperienceTitle, ExperienceSnippet, Education, Project, ProjectSnippet, Skill, Interest, Award, Language, Certification, Reference, Layout
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    resume = serializers.PrimaryKeyRelatedField(many=False, queryset=Resume.objects.all())
    user_profile = serializers.PrimaryKeyRelatedField(many=False, queryset=UserProfile.objects.all())

    class Meta:
        model = User
        fields = ('username', 'email', 'resume', 'user_profile')

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'user', 'full_name', 'phone_number', 'address', 'city', 'state', 'zipcode', 'website', 'portfolio', 'github', 'linkedin', 'twitter', 'facebook', 'instagram')

class ResumeSerializer(serializers.ModelSerializer):
    titles = serializers.PrimaryKeyRelatedField(many=True, queryset=ResumeTitle.objects.all())
    summary_snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=SummarySnippet.objects.all())
    experience_items = serializers.PrimaryKeyRelatedField(many=True, queryset=Experience.objects.all())
    education_items = serializers.PrimaryKeyRelatedField(many=True, queryset=Education.objects.all())
    projects = serializers.PrimaryKeyRelatedField(many=True, queryset=Project.objects.all())
    skills = serializers.PrimaryKeyRelatedField(many=True, queryset=Skill.objects.all())
    interests = serializers.PrimaryKeyRelatedField(many=True, queryset=Interest.objects.all())
    awards = serializers.PrimaryKeyRelatedField(many=True, queryset=Award.objects.all())
    languages = serializers.PrimaryKeyRelatedField(many=True, queryset=Language.objects.all())
    certifications = serializers.PrimaryKeyRelatedField(many=True, queryset=Certification.objects.all())
    references = serializers.PrimaryKeyRelatedField(many=True, queryset=Reference.objects.all())
    layouts = serializers.PrimaryKeyRelatedField(many=True, queryset=Layout.objects.all())

    class Meta:
        model = Resume
        fields = ('id', 'user', 'titles', 'summary_snippets', 'experience_items', 'education_items', 'projects', 'skills', 'interests', 'awards', 'languages', 'certifications', 'references', 'layouts')

class ResumeTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResumeTitle
        fields = ('id', 'resume', 'title')

class SummarySnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = SummarySnippet
        fields = ('id', 'resume', 'snippet')

class ExperienceSerializer(serializers.ModelSerializer):
    experience_titles = serializers.PrimaryKeyRelatedField(many=True, queryset=ExperienceTitle.objects.all())
    experience_snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=ExperienceSnippet.objects.all())

    class Meta:
        model = Experience
        fields = ('id', 'resume', 'company', 'city', 'state', 'start_date', 'end_date', 'is_current', 'experience_titles', 'experience_snippets')

class ExperienceTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceTitle
        fields = ('id', 'experience', 'title')

class ExperienceSnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceSnippet
        fields = ('id', 'experience', 'snippet')

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('id', 'resume', 'school', 'city', 'state', 'start_date', 'end_date', 'is_current', 'degree_type', 'degree_field', 'gpa')

class ProjectSerializer(serializers.ModelSerializer):
    project_snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=ProjectSnippet.objects.all())

    class Meta:
        model = Project
        fields = ('id', 'resume', 'name', 'start_date', 'end_date', 'url', 'role', 'project_snippets')

class ProjectSnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectSnippet
        fields = ('id', 'project', 'snippet')

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('id', 'resume', 'name')

class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ('id', 'resume', 'name')

class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award
        fields = ('id', 'resume', 'name', 'date')

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ('id', 'resume', 'name', 'proficiency')

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = ('id', 'resume', 'name', 'details', 'date')

class ReferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reference
        fields = ('id', 'resume', 'name', 'title', 'company', 'phone_number', 'email', 'relationship')

class LayoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Layout
        fields = ('id', 'resume', 'template', 'primary_color', 'secondary_color')

class TemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Template
        fields = ('id', 'name', 'description', 'image_url', 'html_url', 'css_url', 'js_url', 'is_active')