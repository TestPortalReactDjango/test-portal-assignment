from .views import SCQView,MCQView,IQView,QRefTableView
from django.urls import path

urlpatterns =[
    path("single/",SCQView.as_view(),name='listCreateSCQ'),
    path("multiple/",MCQView.as_view(),name='listCreateMCQ'),
    path("integer/",IQView.as_view(),name='listCreateIQ'),
    path("qref/",QRefTableView.as_view(),name='listCreateqRefTable'),
    ]