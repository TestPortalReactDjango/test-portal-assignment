from django.shortcuts import render
from rest_framework import generics
from .serializers import SCQSerializer,MCQSerializer,IQSerializer,QRefTableSerializer
from .models import SingleCorrectQ,MultipleCorrectQ,IntegerTypeQ,qRefTable
# Create your views here.

class SCQView(generics.ListCreateAPIView):
    serializer_class=SCQSerializer

    def get_queryset(self):
        return SingleCorrectQ.objects.values_list('question','option1','option2','option3','option4')
    
class MCQView(generics.ListCreateAPIView):
    serializer_class=MCQSerializer

    def get_queryset(self):
        return MultipleCorrectQ.objects.values_list('question','option1','option2','option3','option4')
    
class IQView(generics.ListCreateAPIView):
    serializer_class=IQSerializer

    def get_queryset(self):
        return IntegerTypeQ.objects.values_list('question')
    
class QRefTableView(generics.ListCreateAPIView):
    serializer_class=QRefTableSerializer

    def get_queryset(self):
        return qRefTable.objects.all()
