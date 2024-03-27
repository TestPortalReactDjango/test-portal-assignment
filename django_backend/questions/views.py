from django.shortcuts import render
from rest_framework import generics
from .serializers import QuestionSerializer
from .models import SingleCorrectQ
# Create your views here.

class QuestionView(generics.ListCreateAPIView):
    serializer_class=QuestionSerializer

    def get_queryset(self):
        return SingleCorrectQ.objects.values_list('question','option1','option2','option3','option4')
    