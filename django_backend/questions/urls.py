from .views import SCQView,MCQView,IQView,QRefTableView,QTypeView,SCQRetrieveView,MCQRetrieveView,IQRetrieveView,QRefTableRetrieveView,QTypeRetrieveView
from django.urls import path

urlpatterns =[
    path("single/",SCQView.as_view(),name='listCreateSCQ'),
    path("multiple/",MCQView.as_view(),name='listCreateMCQ'),
    path("integer/",IQView.as_view(),name='listCreateIQ'),
    path("qref/",QRefTableView.as_view(),name='listCreateqRefTable'),
    path("qtype/",QTypeView.as_view(),name='listCreateqType'),
    path("singleRetrieve/<pk>/",SCQRetrieveView.as_view(),name='RetrieveUpdateDestroySCQ'),
    path("multipleRetrieve/<pk>/",MCQRetrieveView.as_view(),name='RetrieveUpdateDestroyMCQ'),
    path("integerRetrieve/<pk>/",IQRetrieveView.as_view(),name='RetrieveUpdateDestroyIQ'),
    path("qrefRetrieve/<pk>/",QRefTableRetrieveView.as_view(),name='RetrieveUpdateDestroyqRefTable'),
    path("qtypeRetrieve/<pk>/",QTypeRetrieveView.as_view(),name='RetrieveUpdateDestroyqType'),
]