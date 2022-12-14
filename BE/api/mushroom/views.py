from io import BytesIO

import numpy as np
import requests
from django.http import Http404
from django.shortcuts import render
from history.models import History, HistoryItem
from keras.models import load_model
from mushroom.models import Mushroom
from mushroom.serializers import MushroomSerializer
from PIL import Image
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *

model = load_model("model_12classes.h5")
class_names = ['Blue mycena',
               'Cortinarius violaceus',
               'Favolaschia calocera',
               'Nấm hầu thủ',
               'Nấm hương',
               'Nấm kim châm',
               'Nấm mỡ',
               'Nấm mộc nhĩ',
               'Nấm độc tán trắng',
               'Nấm độc đỏ',
               'Nấm đùi gà',
               'Podostroma cornu-damae']


class MushroomsList(APIView):
    def get(self, request, format=None):
        try:
            mushrooms = Mushroom.objects.all()
            mydata = MushroomSerializer(mushrooms, many=True)
            return Response(mydata.data)
        except Mushroom.DoesNotExist:
            raise Http404


class MushroomDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """

    def get(self, request, pk, format=None):
        try:
            mushroom = Mushroom.objects.get(id=pk)
            mydata = MushroomSerializer(mushroom)
            return Response(mydata.data)
        except Mushroom.DoesNotExist:
            raise Http404


class MushroomPredict(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        data = request.data
        user = request.user

        response = requests.get(data.get('image'))
        image = Image.open(BytesIO(response.content))
        image = image.resize((256, 256), Image.ANTIALIAS)

        image = np.array(image)
        img_batch = np.expand_dims(image, axis=0)
        predictions = model.predict(img_batch)
        predicted = np.argmax(predictions[0])
        confidence = np.max(predictions[0])

        history, _ = History.objects.get_or_create(user=user)
        mushroom = Mushroom.objects.get(id=(predicted+1))
        history_item = HistoryItem(history=history, mushroom=mushroom, image=(data.get('image')), accuracy=confidence)
        history_item.save()
        return Response({"predicted_index": predicted, "confidence": confidence, "mushroom": (MushroomSerializer(mushroom)).data})
