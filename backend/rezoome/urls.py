from django.conf import settings
from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.urls import include
from resume import views


urlpatterns = [
    path(r'', TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

dataurlpatterns = [
    path('userprofile/', views.UserProfiles.as_view()),
    path('resume/', views.GetResume.as_view()),
]

authurlpatterns = [
    path('login/', views.login_view),
    path('logout/', views.logout_view),
    path('sign-up/', views.sign_up),
    path('login/restore/', views.restore_session),
    # path('api-auth/', include('rest_framework.urls'))
]

urlpatterns += authurlpatterns + dataurlpatterns
