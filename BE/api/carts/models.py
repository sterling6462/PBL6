from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import pre_save
from django.dispatch import receiver
from mushrooms.models import Mushroom
# Create your models here.


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user.username)


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    mushroom = models.ForeignKey(Mushroom, on_delete=models.CASCADE)

    def __str__(self):
        return "item : " + str(self.mushroom.mushroom_name)


@receiver(pre_save, sender=CartItem)
def add_to_cart(sender, **kwargs):
    cart_item = kwargs['instance']
    cart = Cart.objects.get(id=cart_item.cart.id)
    cart.save()
