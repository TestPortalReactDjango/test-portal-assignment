from django.contrib import admin
from .models import SingleCorrectQ,MultipleCorrectQ,IntegerTypeQ,qRefTable
# Register your models here.
admin.site.register(SingleCorrectQ)
admin.site.register(MultipleCorrectQ)
admin.site.register(IntegerTypeQ)
admin.site.register(qRefTable)