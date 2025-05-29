from django.test import TestCase
from .models import MenuItem

class MenuItemTests(TestCase):
    def setUp(self):
        MenuItem.objects.create(name="Pizza", description="Cheese Pizza", price=10.99, category_id=1)

    def test_menu_item_name(self):
        item = MenuItem.objects.get(name="Pizza")
        self.assertEqual(item.name, "Pizza")