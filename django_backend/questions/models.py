from django.db import models
# Create your models here.
SCQ_Choices=(
    ("1", "1"), 
    ("2", "2"), 
    ("3", "3"), 
    ("4", "4"), 
)
MCQ_Choices=(
    ("1","1"), 
    ("2", "2"), 
    ("3", "3"), 
    ("4", "4"), 
    ("1,2", "1,2"), 
    ("1,3", "1,3"), 
    ("1,4", "1,4"), 
    ("2,3", "2,3"), 
    ("2,4", "2,4"), 
    ("3,4", "3,4"), 
    ("1,2,3", "1,2,3"), 
    ("1,2,4", "1,2,4"), 
    ("1,3,4", "1,3,4"), 
    ("2,3,4", "2,3,4"), 
    ("1,2,3,4", "1,2,3,4"),  
)

IQ_Choices=(
    (1, 1), 
    (2, 2), 
    (3, 3), 
    (4, 4), 
    (5, 5), 
    (6, 6), 
    (7, 7), 
    (8, 8),
    (9, 9),
)
class SingleCorrectQ(models.Model):
    question=models.CharField(max_length=300,blank=False,null=False)
    option1=models.CharField(max_length=100)
    option2=models.CharField(max_length=100)
    option3=models.CharField(max_length=100)
    option4=models.CharField(max_length=100)
    correctOption=models.CharField(max_length=1,choices=SCQ_Choices)

class MultipleCorrectQ(models.Model):
    question=models.CharField(max_length=300,blank=False,null=False)
    option1=models.CharField(max_length=100)
    option2=models.CharField(max_length=100)
    option3=models.CharField(max_length=100)
    option4=models.CharField(max_length=100)
    correctOptions=models.CharField(max_length=10,choices=MCQ_Choices) #to find a way to define multiple correct answers

class IntegerTypeQ(models.Model):
    question=models.CharField(max_length=300,blank=False,null=False)
    correctOption=models.IntegerField(blank=False,null=False,choices=IQ_Choices)

class qType(models.Model):
    single=models.ForeignKey(SingleCorrectQ,on_delete=models.CASCADE,blank=True,null=True)
    multiple=models.ForeignKey(MultipleCorrectQ,on_delete=models.CASCADE,blank=True,null=True)
    integer=models.ForeignKey(IntegerTypeQ,on_delete=models.CASCADE,blank=True,null=True)

class qRefTable(models.Model):
    q1=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q1_set')
    q2=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q2_set')
    q3=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q3_set')
    q4=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q4_set')
    q5=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q5_set')
    q6=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q6_set')
    q7=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q7_set')
    q8=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q8_set')
    q9=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q9_set')
    q10=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q10_set')
    q11=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q11_set')
    q12=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q12_set')
    q13=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q13_set')
    q14=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q14_set')
    q15=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q15_set')
    q16=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q16_set')
    q17=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q17_set')
    q18=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q18_set')
    q19=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q19_set')
    q20=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q20_set')
    q21=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q21_set')
    q22=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q22_set')
    q23=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q23_set')
    q24=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q24_set')
    q25=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q25_set')
    q26=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q26_set')
    q27=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q27_set')
    q28=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q28_set')
    q29=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q29_set')
    q30=models.ForeignKey(qType,on_delete=models.CASCADE, blank=True,
        null=True,related_name='q30_set')