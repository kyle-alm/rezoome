from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path(r'', TemplateView.as_view(template_name='index.html')),
    path('api-view/', include('resume.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)



