from django.shortcuts import render,redirect
from .models import Profile,User
from .serializer import UserSerializer, MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework.decorators import api_view,permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from rest_framework.permissions import AllowAny , IsAuthenticated
from rest_framework.response import Response

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes=([AllowAny])
    serializer_class=RegisterSerializer

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    if request.method=="GET":
        response = f"Hey {request.user}, you are seeing a GET Response"
        return Response({'response':response},status=status.HTTP_200_OK)
    elif request.method == "POST":
        text = request.POST.get("text")
        response = f"Hey {request.user}, your text is {text}"
        return Response({'response':response},status=status.HTTP_200_OK)
    else:
        return Response({},status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Hello buddy"
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)

    
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/signup/token/',
        '/signup/register/',
        '/signup/token/refresh/'
    ]
    return Response(routes)

























# import json
# from django.contrib.auth import authenticate,login,logout
# from django.http import JsonResponse
# from django.views.decorators.csrf import ensure_csrf_cookie
# from django.views.decorators.http import require_POST

# @require_POST
# def login_view(request):
#     data = json.loads(request.body)
#     username = data.get("username")
#     password = data.get("password")

#     if username is None or password is None:
#         return JsonResponse({"detail":"Please proide username and password"})
    
#     user = authenticate(username=username, password=password)
#     if user is None:
#         return JsonResponse({"detail":"invalid credentials"},status=400)
#     login(request,user)
#     return JsonResponse({"detail":"successfully logged in!"})

# def logout_view(request):
#     if not request.user.is_authenticated:
#         return JsonResponse({"detail":"you are not logged in!"},status =400)
#     logout(request)
#     return JsonResponse ({"detail":"successfully logged out!"})

# @ensure_csrf_cookie
# def session_view(request):
#     if not request.user.is_authenticated:
#         return JsonResponse({"isauthenticated":False})
#     return JsonResponse({"isauthenticated":True})

# def whoami_view(request):
#     if not request.user.is_authenticated:
#         return JsonResponse({"isauthenticated":False})
#     return JsonResponse({"username":request.user.username})

# from django.http import HttpResponse
# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate, login,logout
# from django.contrib.auth.decorators import login_required

# def home(request):
#     return render(request,'index.html',{})

# def stud_login(request):
#     if request.method=="POST":
#         username=request.POST.get('username')
#         pass1=request.POST.get('pass')
#         user=authenticate(request,username=username,password=pass1)
#         if user is not None and user.role=='student':
#             login(request,user)
#             return redirect('homepage')
#         else:
#             return HttpResponse("Username or Password is not correct")
#     return render(request,'student_login.html',{})


# def new_user(request):
#     if request.method=="POST":
#         uname=request.POST.get("username")
#         email=request.POST.get("email")
#         role=request.POST.get("role")
#         pass1=request.POST.get("password")
#         pass2=request.POST.get("confirm")
#         my_user=User.objects.create_user(uname,email,pass1)
#         if pass1==pass2:
#             my_user.save()
#             return redirect(request,'stud_login')
#         else:
#             return HttpResponse("Passwords enetered do not match!")
#     return render(request, 'create_account.html',{})


# @login_required(login_url='stud_login')
# def stud_homepage(request):
#     HttpResponse("hello student here are your tests!")

# def Logout_page(request):
#     logout(request)
#     return redirect('home')
