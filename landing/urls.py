from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', views.onlanding, name="onlanding"),
    path('signup/', views.signup, name="signup"),
    path('dashdoctor/', views.dashboard_doctor, name="dashboarddoc"),
    path('dashpatient/', views.dashboard_patient, name="dashboardpat"),
    path('viewpost/<int:pk>', views.postview, name="viewpost"),
    path('logout/', views.user_logout, name="logout"),
    path('confevent/', views.confrm, name="confirm"),
    

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
