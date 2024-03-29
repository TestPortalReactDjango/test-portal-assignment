from .views import SCQView,MCQView,IQView,QRefTableView,QTypeView,SCQRetrieveView,MCQRetrieveView,IQRetrieveView,QRefTableRetrieveView,QTypeRetrieveView
from django.urls import path

urlpatterns =[
    path("single/",SCQView.as_view(),name='listCreateSCQ'),
    path("multiple/",MCQView.as_view(),name='listCreateMCQ'),
    path("integer/",IQView.as_view(),name='listCreateIQ'),
    path("qref/",QRefTableView.as_view(),name='listCreateqRefTable'),
    path("qtype/",QTypeView.as_view(),name='listCreateqType'),
    path("singleRetrieve/",SCQRetrieveView.as_view(),name='RetrieveUpdateDestroySCQ'),
    path("multipleRetrieve/",MCQRetrieveView.as_view(),name='RetrieveUpdateDestroyMCQ'),
    path("integerRetrieve/",IQRetrieveView.as_view(),name='RetrieveUpdateDestroyIQ'),
    path("qrefRetrieve/",QRefTableRetrieveView.as_view(),name='RetrieveUpdateDestroyqRefTable'),
    path("qtypeRetrieve/",QTypeRetrieveView.as_view(),name='RetrieveUpdateDestroyqType'),
]