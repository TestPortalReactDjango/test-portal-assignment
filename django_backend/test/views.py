from rest_framework.decorators import api_view
from django.shortcuts import render
from rest_framework import generics
from .serializers import TestSerializer
from .models import test
from .models import userresponses
from .models import Testresult
from questions.models import *
from django.contrib.auth.decorators import login_required
from rest_framework import permissions
import json
from django.db.models import Q
# Create your views here.


permission_classes = [permissions.IsAuthenticated]
class TestView(generics.ListCreateAPIView):
    serializer_class=TestSerializer

    def get_queryset(self):
        return test.objects.all()
    
@api_view(['POST'])
def response_insert(self,request):
    data=json.loads(request.body)
    user = data.get('user')
    test=data.get('test')
    qid=data.get('qid')
    qt = data.get('qt')
    sol=data.get('sol')
    
    user_response = userresponses.objects.create(
        user=user,
        test=test,
        qt=qt,
        sol=sol,
        qid=qid
    )
    # user_response.save()
    return data

@api_view(['GET'])
def result(request):
    user=request.user
    test=request.get('test')
    qid=request.get('qid')
    qt=request.get('qt')
    qtypes = qType.objects.filter(
        pk=qt
    ).filter(
        Q(single__isnull=False) |
        Q(multiple__isnull=False) |
        # Add more conditions for each field you want to check.
        Q(integer__isnull=False)
    )
    listqtypes=list(qtypes)


