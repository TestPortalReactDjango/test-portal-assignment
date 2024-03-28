from rest_framework import serializers
from .models import test

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model=test
        fields=['pk','testname','numberOfQuestion','startTime','endTime','qRefTable']