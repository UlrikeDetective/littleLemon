from django.shortcuts import render
from rest_framework import viewsets
from .models import MenuItem, Category
from .serializers import MenuItemSerializer, CategorySerializer

class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

def home(request):
    return render(request, 'home.html')