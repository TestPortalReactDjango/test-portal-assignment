from .views import TestView
from django.urls import path

urlpatterns =[
    path("listCreateTest/",TestView.as_view(),name='listCreate'),
    ]