from rest_framework.decorators import api_view
from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from .models import test
from .models import userresponses
# from .models import Testresult
from test.models import *
from questions.models import *
from django.contrib.auth.decorators import login_required
from rest_framework import permissions
import json
from django.db.models import Q
from rest_framework.response import Response
from rest_framework import status
from rest_framework.serializers import ValidationError
# Create your views here.


from django.shortcuts import render
# from .models import Test  # Assuming your model class is named Test

class ListAllTestsAPIView(generics.ListAPIView):
    def get_queryset(self):
        queryset = test.objects.all()  # Retrieve all test objects by default
        return queryset

    serializer_class = TestSerializer 



permission_classes = [permissions.IsAuthenticated]
class TestView(generics.ListCreateAPIView):
    serializer_class=TestSerializer

    def get_queryset(self):
        return test.objects.all()
    
# @api_view(['POST'])
# def response_insert(request):
#     serializer = userresponsesSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save() 
#         return Response(serializer.data, status=status.HTTP_201_CREATED)  # Return the saved data and 201 status code
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  

@api_view(['POST'])
def result(request):
    serializer = userresponsesSerializer(data=request.data)
    print(request.data)
    if serializer.is_valid():
        serializer.save()
        user = serializer.get('user')
        test = serializer.get('test')
        qid = serializer.get('qid')
        qt = serializer.get('qt')
        sol_value = serializer.get('sol')

        # def get_field_info_and_values(qt):
        #     fields = ['single', 'multiple', 'integer']
        #     record = qType.objects.filter(qt=qt).values_list(*fields, flat=False).first()
        #     field_name = None
        #     non_null_value = None
        #     values_list = []
        #     if record:
        #         for field, value in zip(fields, record):
        #             values_list.append(value) 
        #             if value is not None and not field_name:
        #                 field_name, non_null_value = field, value
        #         return field_name, non_null_value, values_list
        #     return None, None, values_list
        # field_name, value, values_list = get_field_info_and_values(qt)

        if (qt=='single'):
            correct_option = SingleCorrectQ.objects.values_list('correctOption', flat=True).get(pk=qid)
            # sol_value = userresponses.objects.values_list('sol', flat=True).get(qid=qid,user=user,test=test)
            if (correct_option== sol_value):
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
        
        elif (qt=='multiple'):
            correct_option = MultipleCorrectQ.objects.values_list('correctOption', flat=True).get(pk=qid)
            # sol_value = userresponses.objects.values_list('sol', flat=True).get(qid=qid,user=user,test=test)
            if (correct_option== sol_value):
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

        elif (qt=='integer'):
            correct_option = IntegerTypeQ.objects.values_list('correctOption', flat=True).get(pk=qid)
            # sol_value = userresponses.objects.values_list('sol', flat=True).get(qid=qid,user=user,test=test)
            if (correct_option== sol_value):
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
        return  Response(status=status.HTTP_202_ACCEPTED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def calculate_marks(request):

    serializer = marksSerializer(data=request.data)

    try:
        serializer.is_valid(raise_exception=True)
    except ValidationError as e:
        return Response(e.detail, status=status.HTTP_400_BAD_REQUEST)

    user = serializer.validated_data['user']
    test = serializer.validated_data['test']

    if not User.objects.filter(pk=user.id).exists() or not testresult.objects.filter(pk=test.id).exists():
        return Response({'error': 'Invalid user or test ID'}, status=status.HTTP_400_BAD_REQUEST)

    tf_list = list(testresult.objects.filter(user=user, test=test).values_list('tf', flat=True))
    total_marks = sum(mark for mark in tf_list if mark) 

    new_marks = Marks.objects.create(user=user, test=test, result=total_marks)

    return Response({"marks": new_marks.result})    

 