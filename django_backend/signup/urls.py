from django.urls import path 
from . import views
from rest_framework_simplejwt.views import TokenRefreshView
from signup import views


urlpatterns  = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('dashboard/',views.dashboard),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),
    # path('login/',views.login_view, name='login'),
    # path('logout/',views.logout, name='logout'),
    # path('session/',views.session_view, name='session'),
    # path('whoami/',views.whoami_view, name='whoami'),
]