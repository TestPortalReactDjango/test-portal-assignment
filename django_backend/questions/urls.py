from .views import QuestionView
from django.urls import path

urlpatterns =[
    path("question/",QuestionView.as_view(),name='listCreateQuestion'),
    ]