from dataclasses import fields
from unicodedata import category
from rest_framework import serializers
from .models import *
from mushrooms.serializers import *


class CartSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cart
        fields = '__all__'


class CartItemSerializer(serializers.ModelSerializer):
    cart = CartSerializer()
    mushroom = MushroomSerializer()

    class Meta:
        model = CartItem
        fields = '__all__'
