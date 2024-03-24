from django.db import models

# Create your models here.
class test(models.Model):
    testname=models.CharField(max_length=100,blank=False,null=False)
    numberOfQuestion=models.IntegerField()
    startTime=models.TimeField()
    endTime=models.TimeField()
    qRefTable=models.ForeignKey()