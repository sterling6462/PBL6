# Create your models here.
from django.db import models


class Mushroom(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='static/mushrooms.jpg')
    desc = models.TextField(blank=True)

    def __str__(self):
        return self.name
