from rest_framework import serializers
from .models import *

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model=test
        fields=['pk','testname','numberOfQuestion','startTime','endTime','qRefTable']


class userresponsesSerializer(serializers.ModelSerializer):
    class Meta:
        model = userresponses
        fields = ['user','test','qt','qid','sol']

class marksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marks
        fields = ['user','test']