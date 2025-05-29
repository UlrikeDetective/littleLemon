from django.urls import path
from . import views

urlpatterns = [
    # Example endpoints (add your actual views as you implement them)
    path('menu-items/', views.MenuItemList.as_view(), name='menuitem-list'),
    path('categories/', views.CategoryList.as_view(), name='category-list'),
    path('orders/', views.OrderList.as_view(), name='order-list'),
]