from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login,logout
from django.contrib.auth.decorators import login_required

def home(request):
    return render(request,'index.html',{})

def stud_login(request):
    if request.method=="POST":
        username=request.POST.get('username')
        pass1=request.POST.get('pass')
        user=authenticate(request,username=username,password=pass1)
        if user is not None and user.role=='student':
            login(request,user)
            return redirect('homepage')
        else:
            return HttpResponse("Username or Password is not correct")
    return render(request,'student_login.html',{})


def new_user(request):
    if request.method=="POST":
        uname=request.POST.get("username")
        email=request.POST.get("email")
        role=request.POST.get("role")
        pass1=request.POST.get("password")
        pass2=request.POST.get("confirm")
        my_user=User.objects.create_user(uname,email,pass1)
        if pass1==pass2:
            my_user.save()
            return redirect(request,'stud_login')
        else:
            return HttpResponse("Passwords enetered do not match!")
    return render(request, 'create_account.html',{})


@login_required(login_url='stud_login')
def stud_homepage(request):
    HttpResponse("hello student here are your tests!")

def Logout_page(request):
    logout(request)
    return redirect('home')
