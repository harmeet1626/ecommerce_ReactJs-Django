from django.contrib import admin
from django.urls import path
# from products.views import addProduct
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('getUserDetails/', views.getUserDetails, name='userdetails'),
]
