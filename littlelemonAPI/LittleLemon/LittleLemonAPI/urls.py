from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from . import views

def home(request):
    return HttpResponse("Welcome to the Little Lemon API!")


urlpatterns = [
    path('menu-items/', views.MenuItemList.as_view(), name='menuitem-list'),
    path('categories/', views.CategoryList.as_view(), name='category-list'),
    path('orders/', views.OrderList.as_view(), name='order-list'),
    path('', views.home, name='home'),
]