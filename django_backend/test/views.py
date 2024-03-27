from django.shortcuts import render
from rest_framework import generics
from .serializers import TestSerializer
from .models import test
# Create your views here.

class TestView(generics.ListCreateAPIView):
    serializer_class=TestSerializer

    def get_queryset(self):
        return test.objects.values_list('testName','numberOfQuestion','startTime','endTime')
    