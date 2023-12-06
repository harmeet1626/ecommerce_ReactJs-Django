from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    age = models.IntegerField(default=0)
    gender = models.CharField(max_length=10, default=0)
    phone = models.CharField(max_length=25, default=0)
    dob = models.DateField(default="2000-12-25")
    image = models.CharField(max_length=500, default=0)
    is_seller = models.BooleanField(default=False)
    class Meta:
	    db_table = "User"
    

