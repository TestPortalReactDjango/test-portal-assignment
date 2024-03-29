from django.shortcuts import render
from rest_framework import generics
from .serializers import SCQSerializer,MCQSerializer,IQSerializer,QRefTableSerializer,QTypeSerializer
from .models import SingleCorrectQ,MultipleCorrectQ,IntegerTypeQ,qRefTable,qType
# Create your views here.

class SCQView(generics.ListCreateAPIView):
    serializer_class=SCQSerializer

    def get_queryset(self):
        return SingleCorrectQ.objects.all()
    
class MCQView(generics.ListCreateAPIView):
    serializer_class=MCQSerializer

    def get_queryset(self):
        return MultipleCorrectQ.objects.all()
    
class IQView(generics.ListCreateAPIView):
    serializer_class=IQSerializer

    def get_queryset(self):
        return IntegerTypeQ.objects.all()
    
class QRefTableView(generics.ListCreateAPIView):
    serializer_class=QRefTableSerializer

    def get_queryset(self):
        return qRefTable.objects.all()

class QTypeView(generics.ListCreateAPIView):
    serializer_class=QTypeSerializer

    def get_queryset(self):
        return qType.objects.all()
    
class SCQRetrieveView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=SCQSerializer

    def get_queryset(self):
        return SingleCorrectQ.objects.all()
    
class MCQRetrieveView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=MCQSerializer

    def get_queryset(self):
        return MultipleCorrectQ.objects.all()
    
class IQRetrieveView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=IQSerializer

    def get_queryset(self):
        return IntegerTypeQ.objects.all()
    
class QRefTableRetrieveView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=QRefTableSerializer

    def get_queryset(self):
        return qRefTable.objects.all()

class QTypeRetrieveView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=QTypeSerializer

    def get_queryset(self):
        return qType.objects.all()