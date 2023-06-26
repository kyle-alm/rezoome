from django.urls import include, path, re_path
from rest_framework import routers
from django.contrib import admin
from resume import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'userprofiles', views.UserProfileViewSet)
router.register(r'resumes', views.ResumeViewSet)
router.register(r'resumetitles', views.ResumeTitleViewSet)
router.register(r'summarysnippets', views.SummarySnippetViewSet)
router.register(r'experiences', views.ExperienceViewSet)
router.register(r'experiencetitles', views.ExperienceTitleViewSet)
router.register(r'experiencesnippets', views.ExperienceSnippetViewSet)
router.register(r'educations', views.EducationViewSet)
router.register(r'projects', views.ProjectViewSet)
router.register(r'projectsnippets', views.ProjectViewSet)
router.register(r'skills', views.SkillViewSet)
router.register(r'interests', views.InterestViewSet)
router.register(r'awards', views.AwardViewSet)
router.register(r'languages', views.LanguageViewSet)
router.register(r'certifications', views.CertificationViewSet)
router.register(r'references', views.ReferenceViewSet)
router.register(r'layouts', views.LayoutViewSet)
router.register(r'templates', views.TemplateViewSet)



urlpatterns = [
    path('', include(router.urls)),
]