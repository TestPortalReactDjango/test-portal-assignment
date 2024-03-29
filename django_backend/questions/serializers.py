from rest_framework import serializers
from .models import SingleCorrectQ,MultipleCorrectQ,IntegerTypeQ,qRefTable,qType

class SCQSerializer(serializers.ModelSerializer):
    class Meta:
        model=SingleCorrectQ
        fields=['pk','question','option1','option2','option3','option4','correctOption']
        
class MCQSerializer(serializers.ModelSerializer):
    class Meta:
        model=MultipleCorrectQ
        fields=['pk','question','option1','option2','option3','option4','correctOptions']

class IQSerializer(serializers.ModelSerializer):
    class Meta:
        model=IntegerTypeQ
        fields=['pk','question','correctOption']

class QRefTableSerializer(serializers.ModelSerializer):
    class Meta:
        model=qRefTable
        fields=['pk','q1','q2','q3','q4','q5','q6','q7','q8','q9','q10','q11','q12','q13','q14','q15','q16','q17','q18','q19','q20','q21','q22','q23','q24','q25','q26','q27','q28','q29','q30']

class QTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model=qType
        fields=['pk','single','multiple','integer']
