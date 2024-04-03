# from .views import *
from django.urls import path
from . import views

urlpatterns =[
    path('testcreate/',views.TestView.as_view(),name='listCreateTest'),
    path('api/v1/marks/', views.calculate_marks, name='calculate_marks'),
    path('result/',views.result,name='result'),
    ]