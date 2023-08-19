from resume.models import User, UserProfile, Template, Resume, ResumeTitle, SummarySnippet, Experience, ExperienceTitle, ExperienceSnippet, Education, Project, ProjectSnippet, Skill, Interest, Award, Language, Certification, Reference, Layout
from rest_framework import serializers

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('__all__')

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    user_profile = UserProfileSerializer(required=False)

    class Meta:
        model = User
        fields = ('__all__')

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

class ResumeSerializer(serializers.ModelSerializer):
    resume_titles = serializers.PrimaryKeyRelatedField(many=True, queryset=ResumeTitle.objects.all())
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
        fields = ('__all__')

class ResumeTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResumeTitle
        fields = ('__all__')

class SummarySnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = SummarySnippet
        fields = ('__all__')

class ExperienceSerializer(serializers.ModelSerializer):
    experience_titles = serializers.PrimaryKeyRelatedField(many=True, queryset=ExperienceTitle.objects.all())
    experience_snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=ExperienceSnippet.objects.all())

    class Meta:
        model = Experience
        fields = ('__all__')

class ExperienceTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceTitle
        fields = ('__all__')

class ExperienceSnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceSnippet
        fields = ('__all__')

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('__all__')

class ProjectSerializer(serializers.ModelSerializer):
    project_snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=ProjectSnippet.objects.all())

    class Meta:
        model = Project
        fields = ('__all__')

class ProjectSnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectSnippet
        fields = ('__all__')

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('__all__')

class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ('__all__')

class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award
        fields = ('__all__')

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ('__all__')

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = ('__all__')

class ReferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reference
        fields = ('__all__')

class LayoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Layout
        fields = ('__all__')

class TemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Template
        fields = ('__all__')