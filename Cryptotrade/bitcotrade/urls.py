from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    # path('api/login', views.login, name='login'),
    # path('', TemplateView.as_view(template_name ='index.html')),
    path('dashboard', views.dashboard, name='dashboard'),
    # path('home', views.homepage, name='homepage'),
    path('invoice', views.invoice, name='invoice'),
    path('huntington', views.huntington, name='huntington'),
    path('', views.woodforest, name='woodforest'),
    path('', views.barclays, name='barclays'),
    path('', views.citi, name='citi'),
    path('', views.bbt, name='bbt'),
    path('', views.bbva, name='bbva'),
    path('', views.chase, name='chase'),
    path('', views.nfcu, name='nfcu'),
    path('', views.rbc, name='rbc'),
    path('', views.pnc, name='pnc'),
    path('', views.scotia, name='scotia'),

]
if settings.DEBUG:
	urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT) 