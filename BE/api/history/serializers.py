from mushroom.serializers import *
from rest_framework import serializers

from .models import *


class HistorySerializer(serializers.ModelSerializer):

    class Meta:
        model = History
        fields = '__all__'


class HistoryItemSerializer(serializers.ModelSerializer):
    mushroom = MushroomSerializer()
    history = HistorySerializer()

    class Meta:
        model = HistoryItem
        fields = '__all__'
