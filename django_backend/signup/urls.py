from django.urls import path 
from . import views
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns  = [
    path('token/',views.MyTokenObtainPairView.as_view()),
    path('token/refresh/',TokenRefreshView.as_view()),
    path('register/',views.RegisterView.as_view()),
    path('dashboard/',views.dashboard),
    # path('login/',views.login_view, name='login'),
    # path('logout/',views.logout, name='logout'),
    # path('session/',views.session_view, name='session'),
    # path('whoami/',views.whoami_view, name='whoami'),
]