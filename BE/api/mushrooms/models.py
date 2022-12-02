from django.db import models
from django.utils.text import slugify
# Create your models here.


class Category(models.Model):
    category_name = models.CharField(max_length=100)

    def __str__(self):
        return self.category_name


class Mushroom(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    mushroom_name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='static/mushrooms')
    description = models.TextField()

    def __str__(self):
        return self.mushroom_name
