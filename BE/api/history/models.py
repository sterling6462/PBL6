from django.contrib.auth.models import User
from django.db import models
from mushroom.models import Mushroom


# Create your models here.
class History(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user.username)


class HistoryItem(models.Model):
    mushroom = models.ForeignKey(Mushroom, on_delete=models.CASCADE)
    image = models.TextField()
    accuracy = models.FloatField()
    date = models.DateField(auto_now_add=True)
    history = models.ForeignKey(History, on_delete=models.CASCADE, default=None)

    def save(self, *args, **kwargs):
        self.accuracy = round(self.accuracy * 100, 2)
        super(HistoryItem, self).save(*args, **kwargs)

    def __str__(self):
        return str(self.mushroom.name) + " : " + str(self.accuracy)
