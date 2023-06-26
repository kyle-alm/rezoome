from django.contrib.auth.models import User
from resume.models import UserProfile, Template, Resume, ResumeTitle, SummarySnippet, Experience, ExperienceTitle, ExperienceSnippet, Education, Project, ProjectSnippet, Skill, Interest, Award, Language, Certification, Reference, Layout
from rest_framework import viewsets
from rest_framework import permissions
from resume.permissions import IsOwner
from resume.serializers import UserSerializer, UserProfileSerializer, ResumeSerializer, ResumeTitleSerializer, SummarySnippetSerializer, ExperienceSerializer, ExperienceTitleSerializer, ExperienceSnippetSerializer, EducationSerializer, ProjectSerializer, ProjectSnippetSerializer, SkillSerializer, InterestSerializer, AwardSerializer, LanguageSerializer, CertificationSerializer, ReferenceSerializer, LayoutSerializer, TemplateSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

class UserProfileViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user profiles to be viewed or edited.
    """
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner)

class ResumeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows resumes to be viewed or edited.
    """
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner)

class ResumeTitleViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows resume titles to be viewed or edited.
    """
    queryset = ResumeTitle.objects.all()
    serializer_class = ResumeTitleSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner)

class SummarySnippetViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows summary snippets to be viewed or edited.
    """
    queryset = SummarySnippet.objects.all()
    serializer_class = SummarySnippetSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner)

class ExperienceViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows experiences to be viewed or edited.
    """
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner)

class ExperienceTitleViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows experience titles to be viewed or edited.
    """
    queryset = ExperienceTitle.objects.all()
    serializer_class = ExperienceTitleSerializer
    permission_classes = (permissions.IsAuthenticated,)

class ExperienceSnippetViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows experience snippets to be viewed or edited.
    """
    queryset = ExperienceSnippet.objects.all()
    serializer_class = ExperienceSnippetSerializer
    permission_classes = (permissions.IsAuthenticated,)

class EducationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows educations to be viewed or edited.
    """
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = (permissions.IsAuthenticated,)

class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows projects to be viewed or edited.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = (permissions.IsAuthenticated,)

class ProjectSnippetViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows project snippets to be viewed or edited.
    """
    queryset = ProjectSnippet.objects.all()
    serializer_class = ProjectSnippetSerializer
    permission_classes = (permissions.IsAuthenticated,)

class SkillViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows skills to be viewed or edited.
    """
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = (permissions.IsAuthenticated,)

class InterestViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows interests to be viewed or edited.
    """
    queryset = Interest.objects.all()
    serializer_class = InterestSerializer
    permission_classes = (permissions.IsAuthenticated,)

class AwardViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows awards to be viewed or edited.
    """
    queryset = Award.objects.all()
    serializer_class = AwardSerializer
    permission_classes = (permissions.IsAuthenticated,)

class LanguageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows languages to be viewed or edited.
    """
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
    permission_classes = (permissions.IsAuthenticated,)

class CertificationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows certifications to be viewed or edited.
    """
    queryset = Certification.objects.all()
    serializer_class = CertificationSerializer
    permission_classes = (permissions.IsAuthenticated,)

class ReferenceViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows references to be viewed or edited.
    """
    queryset = Reference.objects.all()
    serializer_class = ReferenceSerializer
    permission_classes = (permissions.IsAuthenticated,)

class LayoutViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows layouts to be viewed or edited.
    """
    queryset = Layout.objects.all()
    serializer_class = LayoutSerializer
    permission_classes = (permissions.IsAuthenticated,)

class TemplateViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows templates to be viewed or edited.
    """
    queryset = Template.objects.all()
    serializer_class = TemplateSerializer
    permission_classes = (permissions.IsAuthenticated,)