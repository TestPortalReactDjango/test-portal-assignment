from django.shortcuts import render
from rest_framework import generics
from .serializers import SCQSerializer,MCQSerializer,IQSerializer,QRefTableSerializer,QTypeSerializer
from .models import SingleCorrectQ,MultipleCorrectQ,IntegerTypeQ,qRefTable,qType
from rest_framework import permissions


# Create your views here.
permission_classes = [permissions.IsAuthenticated]
class SCQView(generics.ListCreateAPIView):
    serializer_class=SCQSerializer

    def get_queryset(self):
        return SingleCorrectQ.objects.all()
    
permission_classes = [permissions.IsAuthenticated]
class MCQView(generics.ListCreateAPIView):
    serializer_class=MCQSerializer

    def get_queryset(self):
        return MultipleCorrectQ.objects.all()
    
permission_classes = [permissions.IsAuthenticated]
class IQView(generics.ListCreateAPIView):
    serializer_class=IQSerializer

    def get_queryset(self):
        return IntegerTypeQ.objects.all()
    
permission_classes = [permissions.IsAuthenticated]
class QRefTableView(generics.ListCreateAPIView):
    serializer_class=QRefTableSerializer

    def get_queryset(self):
        return qRefTable.objects.all()

permission_classes = [permissions.IsAuthenticated]
class QTypeView(generics.ListCreateAPIView):
    serializer_class=QTypeSerializer

    def get_queryset(self):
        return qType.objects.all()
    

permission_classes = [permissions.IsAuthenticated]    
class SCQRetrieveView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=SCQSerializer

    def get_queryset(self):
        return SingleCorrectQ.objects.all()
    
permission_classes = [permissions.IsAuthenticated] 
class MCQRetrieveView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=MCQSerializer

    def get_queryset(self):
        return MultipleCorrectQ.objects.all()

permission_classes = [permissions.IsAuthenticated]    
class IQRetrieveView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=IQSerializer

    def get_queryset(self):
        return IntegerTypeQ.objects.all()
    
permission_classes = [permissions.IsAuthenticated]
class QRefTableRetrieveView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=QRefTableSerializer

    def get_queryset(self):
        return qRefTable.objects.all()

permission_classes = [permissions.IsAuthenticated]
class QTypeRetrieveView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=QTypeSerializer

    def get_queryset(self):
        return qType.objects.all()