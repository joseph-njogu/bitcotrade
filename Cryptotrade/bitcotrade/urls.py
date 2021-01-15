from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('api/login', views.login, name='login'),
    path('', TemplateView.as_view(template_name ='index.html')),
    # path('', views.dashboard, name='dashboard'),
    # path('home', views.homepage, name='homepage'),
]
if settings.DEBUG:
	urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT) 