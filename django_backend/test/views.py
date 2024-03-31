from django.shortcuts import render
from rest_framework import generics
from .serializers import TestSerializer
from .models import test
from django.contrib.auth.decorators import login_required
from rest_framework import permissions
# Create your views here.


permission_classes = [permissions.IsAuthenticated]
class TestView(generics.ListCreateAPIView):
    serializer_class=TestSerializer

    def get_queryset(self):
        return test.objects.all()