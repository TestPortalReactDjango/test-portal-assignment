from django.db import models
# Create your models here.

class SingleCorrectQ(models.Model):
    question=models.CharField(max_length=300,blank=False,null=False)
    option1=models.CharField(max_length=1)
    option2=models.CharField(max_length=1)
    option3=models.CharField(max_length=1)
    option4=models.CharField(max_length=1)
    correctOption=models.CharField(max_length=1)

class MultipleCorrectQ(models.Model):
    question=models.CharField(max_length=300,blank=False,null=False)
    option1=models.CharField(max_length=1)
    option2=models.CharField(max_length=1)
    option3=models.CharField(max_length=1)
    option4=models.CharField(max_length=1)
    correctOptions=models.CharField() #to find a way to define multiple correct answers

class IntegerTypeQ(models.Model):
    question=models.CharField(max_length=300,blank=False,null=False)
    correctOption=models.IntegerField(blank=False,null=False)

class qRefTable(models.Model):
    q1=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q2=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q3=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q4=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q5=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q6=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q7=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q8=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q9=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q10=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q11=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q12=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q13=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q14=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q15=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q16=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q17=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q18=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q19=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q20=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q21=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q22=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q23=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q24=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q25=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q26=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q27=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q28=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q29=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)
    q30=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE)