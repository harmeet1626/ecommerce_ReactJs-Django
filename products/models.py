from django.db import models
from users.models import User


class Category(models.Model):
    category = models.CharField(max_length=500, default=None)
    class Meta:
	    db_table = "category"
          



class Product(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    seller = models.ForeignKey(User, on_delete=models.CASCADE, default= 1)
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    stock = models.PositiveIntegerField()
    brand = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)
    thumbnail = models.URLField()
    class Meta:
	    db_table = "product"




class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image_url = models.URLField()

    class Meta:
	    db_table = "productImage"





class Cart(models.Model):
    product = models.ForeignKey(Product, on_delete= models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    qty = models.IntegerField(default=1)
    class Meta:
	    db_table = "cart"
  


