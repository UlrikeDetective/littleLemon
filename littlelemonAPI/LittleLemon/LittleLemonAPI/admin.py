from django.contrib import admin
from .models import MenuItem, Category, Order, UserProfile  # Use relative import

# Register your models here
admin.site.register(MenuItem)
admin.site.register(Category)
admin.site.register(Order)
admin.site.register(UserProfile)