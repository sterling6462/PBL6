from dataclasses import fields
from unicodedata import category
from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class MushroomSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mushroom
        fields = '__all__'
