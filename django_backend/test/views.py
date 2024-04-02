from rest_framework.decorators import api_view
from django.shortcuts import render
from rest_framework import generics
from .serializers import TestSerializer
from .models import test
from .models import userresponses
from .models import Testresult
from test.models import *
from questions.models import *
from django.contrib.auth.decorators import login_required
from rest_framework import permissions
import json
from django.db.models import Q
from rest_framework.response import Response
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

@api_view(['POST'])
def result(request):
    user = request.user
    test = request.query_params.get('test')
    qid = request.query_params.get('qid')
    qt = request.query_params.get('qt')

    def get_field_info_and_values(qt):
        fields = ['single', 'multiple', 'integer']
        record = qType.objects.filter(qt=qt).values_list(*fields, flat=False).first()
        field_name = None
        non_null_value = None
        values_list = []
        if record:
            for field, value in zip(fields, record):
                values_list.append(value) 
                if value is not None and not field_name:
                    field_name, non_null_value = field, value
            return field_name, non_null_value, values_list
        return None, None, values_list
    field_name, value, values_list = get_field_info_and_values(qt)

    if (field_name=='single'):
        correct_option = SingleCorrectQ.objects.values_list('correctOption', flat=True).get(pk=qid)
        sol_value = userresponses.objects.values_list('sol', flat=True).get(qid=qid,user=user,test=test)
        if (correct_option== str(sol_value)):
            user_response = testresult.objects.create(
            user=user,
            test=test,
            qid=qid,
            tf=True
            )
        else:
            user_response = testresult.objects.create(
            user=user,
            test=test,
            qid=qid,
            tf=False
            )
    
    elif (field_name=='multiple'):
        correct_option = MultipleCorrectQ.objects.values_list('correctOption', flat=True).get(pk=qid)
        sol_value = userresponses.objects.values_list('sol', flat=True).get(qid=qid,user=user,test=test)
        if (correct_option== str(sol_value)):
            user_response = testresult.objects.create(
            user=user,
            test=test,
            qid=qid,
            tf=True
            )
        else:
            user_response = testresult.objects.create(
            user=user,
            test=test,
            qid=qid,
            tf=False
            )

    elif (field_name=='integer'):
        correct_option = IntegerTypeQ.objects.values_list('correctOption', flat=True).get(pk=qid)
        sol_value = userresponses.objects.values_list('sol', flat=True).get(qid=qid,user=user,test=test)
        if (correct_option== int(sol_value)):
            user_response = testresult.objects.create(
            user=user,
            test=test,
            qid=qid,
            tf=True
            )
        else:
            user_response = testresult.objects.create(
            user=user,
            test=test,
            qid=qid,
            tf=False
            )
    return  None

@api_view(['POST'])
def marks(request):
    user = request.user
    test = request.query_params.get('test')
    tf_list = list(testresult.objects.values_list('tf', flat=True).get(user=user,test=test))
    for i in tf_list:
        if (i==True):
            marksplus = Marks.objects.create(
                result = (result + 4)
            )
    return Response({"marks" : marksplus})


    #     print(f"The first non-null field is {field_name} with a value of {value}.")
    #     print(f"Values List: {values_list}")
    # elif(field_name=='multiple'):
    #     print()
    # elif(field_name=='integer'):
    #     print("No non-null values found or the record does not exist.")


    #     field_name, value, values_list = get_field_info_and_values(qt=qt)
    #     if field_name:
    #         print(f"The first non-null field is {field_name} with a value of {value}.")
    #         print(f"Values List: {values_list}")
    #     else:
    #         print("No non-null values found or the record does not exist.")

















    


    #     print(f"The first non-null field is {field_name} with a value of {value}.")
    #     print(f"Values List: {values_list}")
    # elif(field_name=='multiple'):
    #     print()
    # elif(field_name=='integer'):
    #     print("No non-null values found or the record does not exist.")


    #     field_name, value, values_list = get_field_info_and_values(qt=qt)
    #     if field_name:
    #         print(f"The first non-null field is {field_name} with a value of {value}.")
    #         print(f"Values List: {values_list}")
    #     else:
    #         print("No non-null values found or the record does not exist.")















