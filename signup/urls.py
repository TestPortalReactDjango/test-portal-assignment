from django.urls import path 
from . import views

urlpatterns=[
    path('',views.home,name='home'),
    path('stud_login/',views.stud_login,name='stud_login'),
    path('create_account/',views.new_user,name='new_user'),
    path('homepage/',views.stud_homepage,name='homepage'),
    path('logout/',views.Logout_page,name='logout'),
    path(),
]