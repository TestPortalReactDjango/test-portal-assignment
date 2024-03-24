from django.db import models
from questions.models import qRefTable

# Create your models here.
class test(models.Model):
    testname=models.CharField(max_length=100,blank=False,null=False)
    numberOfQuestion=models.IntegerField()
    startTime=models.DateTimeField()
    endTime=models.DateTimeField()
    qRefTable=models.ForeignKey(qRefTable, on_delete=models.CASCADE)

