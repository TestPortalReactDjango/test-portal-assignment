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
    correctOptions=models.CharField(max_length=20) #to find a way to define multiple correct answers

class IntegerTypeQ(models.Model):
    question=models.CharField(max_length=300,blank=False,null=False)
    correctOption=models.IntegerField(blank=False,null=False)



class qRefTable(models.Model):
    q1=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q1_set')
    q2=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q2_set')
    q3=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q3_set')
    q4=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q4_set')
    q5=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q5_set')
    q6=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q6_set')
    q7=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q7_set')
    q8=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q8_set')
    q9=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q9_set')
    q10=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q10_set')
    q11=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q11_set')
    q12=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q12_set')
    q13=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q13_set')
    q14=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q14_set')
    q15=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q15_set')
    q16=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q16_set')
    q17=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q17_set')
    q18=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q18_set')
    q19=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q19_set')
    q20=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q20_set')
    q21=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q21_set')
    q22=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q22_set')
    q23=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q23_set')
    q24=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q24_set')
    q25=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q25_set')
    q26=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q26_set')
    q27=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q27_set')
    q28=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q28_set')
    q29=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q29_set')
    q30=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q30_set')