from django.db import models
from questions.models import qRefTable
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
    s1=models.CharField(max_length=20
    )
    s2=models.CharField(max_length=20
    )
    s3=models.CharField(max_length=20
    )
    s4=models.CharField(max_length=20
    )
    s5=models.CharField(max_length=20
    )
    s6=models.CharField(max_length=20
    )
    s7=models.CharField(max_length=20
    )
    s8=models.CharField(max_length=20
    )
    s9=models.CharField(max_length=20
    )
    s10=models.CharField(max_length=20
    )
    s11=models.CharField(max_length=20
    )
    s12=models.CharField(max_length=20
    )
    s13=models.CharField(max_length=20
    )
    s14=models.CharField(max_length=20
    )
    s15=models.CharField(max_length=20
    )
    s16=models.CharField(max_length=20
    )
    s17=models.CharField(max_length=20
    )
    s18=models.CharField(max_length=20
    )
    s19=models.CharField(max_length=20
    )
    s20=models.CharField(max_length=20
    )
    s21=models.CharField(max_length=20
    )
    s22=models.CharField(max_length=20
    )
    s23=models.CharField(max_length=20
    )
    s24=models.CharField(max_length=20
    )
    s25=models.CharField(max_length=20
    )
    s26=models.CharField(max_length=20
    )
    s27=models.CharField(max_length=20
    )
    s28=models.CharField(max_length=20
    )
    s29=models.CharField(max_length=20
    )
    s30=models.CharField(max_length=20
    )

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
    
