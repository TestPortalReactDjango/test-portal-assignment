from .views import ListCreateView
from django.urls import path

urlpatterns =[
    path("listCreateTest/",ListCreateView.as_view(),name='listCreate'),
    ]