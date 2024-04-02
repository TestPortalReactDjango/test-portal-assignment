from django.db import models
from questions.models import qRefTable
from questions.models import qType
from questions.models import MultipleCorrectQ
from questions.models import IntegerTypeQ
from questions.models import SingleCorrectQ
from signup.models import User

# Create your models here.
class test(models.Model):
    testname=models.CharField(
    max_length=100,blank=False,null=False)
    numberOfQuestion=models.IntegerField()
    startTime=models.DateTimeField()
    endTime=models.DateTimeField()
    qRefTable=models.ForeignKey(qRefTable, on_delete=models.CASCADE)

class testResponse(models.Model):
    test=models.ForeignKey(test, on_delete=models.CASCADE)
    user=models.ForeignKey(User, on_delete=models.CASCADE)       
    s1=models.CharField(max_length=20, default=''
    )
    s2=models.CharField(max_length=10,default=''
    )
    s3=models.CharField(max_length=10,default=''
    )
    s4=models.CharField(max_length=10,default=''
    )
    s5=models.CharField(max_length=10,default=''
    )
    s6=models.CharField(max_length=10,default=''
    )
    s7=models.CharField(max_length=10,default=''
    )
    s8=models.CharField(max_length=10,default=''
    )
    s9=models.CharField(max_length=10,default=''
    )
    s10=models.CharField(max_length=10,default=''
    )
    s11=models.CharField(max_length=10,default=''
    )
    s12=models.CharField(max_length=10,default=''
    )
    s13=models.CharField(max_length=10,default=''
    )
    s14=models.CharField(max_length=10,default=''
    )
    s15=models.CharField(max_length=10,default=''
    )
    s16=models.CharField(max_length=10,default=''
    )
    s17=models.CharField(max_length=10,default=''
    )
    s18=models.CharField(max_length=10,default=''
    )
    s19=models.CharField(max_length=10,default=''
    )
    s20=models.CharField(max_length=10,default=''
    )
    s21=models.CharField(max_length=10,default=''
    )
    s22=models.CharField(max_length=10,default=''
    )
    s23=models.CharField(max_length=10,default=''
    )
    s24=models.CharField(max_length=10,default=''
    )
    s25=models.CharField(max_length=10,default=''
    )
    s26=models.CharField(max_length=10,default=''
    )
    s27=models.CharField(max_length=10,default=''
    )
    s28=models.CharField(max_length=10,default=''
    )
    s29=models.CharField(max_length=10,default=''
    )
    s30=models.CharField(max_length=10,default=''
    )

class userresponses(models.Model):
    user=models.ForeignKey(User,on_delete = models.CASCADE)
    test=models.ForeignKey(test, on_delete = models.CASCADE)
    qt=models.CharField(max_length=100,default='')
    qid = models.IntegerField(default=0)
    sol=models.CharField(max_length=100,default='')

class testresult(models.Model):
    user=models.ForeignKey(User,on_delete = models.CASCADE)
    test=models.ForeignKey(test,on_delete=models.CASCADE)
    qid=models.ForeignKey(default=0)
    tf = models.BooleanField(default=False)

class testResult(models.Model):
    testResponse=models.ForeignKey(testResponse, on_delete=models.CASCADE)
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    r1=models.BooleanField()
    r2=models.BooleanField()
    r3=models.BooleanField()
    r4=models.BooleanField()
    r5=models.BooleanField()
    r6=models.BooleanField()
    r7=models.BooleanField()
    r8=models.BooleanField()
    r9=models.BooleanField()
    r10=models.BooleanField()
    r11=models.BooleanField()
    r12=models.BooleanField()
    r13=models.BooleanField()
    r14=models.BooleanField()
    r15=models.BooleanField()
    r16=models.BooleanField()
    r17=models.BooleanField()
    r18=models.BooleanField()
    r19=models.BooleanField()
    r20=models.BooleanField()
    r21=models.BooleanField()
    r22=models.BooleanField()
    r23=models.BooleanField()
    r24=models.BooleanField()
    r25=models.BooleanField()
    r26=models.BooleanField()
    r27=models.BooleanField()
    r28=models.BooleanField()
    r29=models.BooleanField()
    r30=models.BooleanField()
    score=models.DecimalField(max_digits=10,decimal_places=10)
    

class Testresult(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    test=models.ForeignKey(test, on_delete = models.CASCADE)
    result  =models.IntegerField(default=0)
