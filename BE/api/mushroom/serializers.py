from rest_framework import serializers

from .models import *


class MushroomSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mushroom
        fields = '__all__'
