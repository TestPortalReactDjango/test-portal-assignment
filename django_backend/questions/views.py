from django.shortcuts import render
from rest_framework.response import Response
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
    
    def perform_create(self, serializer):
        instance = serializer.save()
        response_data = {
            "id": instance.pk,  
            "message": "QRefTable created successfully"
        }
        return Response(response_data, status=201)

class QTypeView(generics.ListCreateAPIView):
    serializer_class=QTypeSerializer

    def get_queryset(self):
        return qType.objects.all()

    def perform_create(self, serializer):
        instance = serializer.save()
        response_data = {
            "id": instance.pk,  
            "message": "QType created successfully"
        }
        return Response(response_data, status=201)
    
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