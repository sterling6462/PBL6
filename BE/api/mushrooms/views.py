import os
from io import BytesIO

import cv2
import numpy as np
import tensorflow as tf
from django.http import Http404
from keras.models import load_model
from mushrooms.serializers import CategorySerializer, MushroomSerializer
from PIL import Image
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *


class CategoriesList(APIView):
    def get(self, request, format=None):
        categories = Category.objects.all()
        mydata = CategorySerializer(categories, many=True)
        return Response(mydata.data)


class MushroomByCategory(APIView):

    def get(self, request, pk, format=None):
        try:
            cat = Category.objects.get(id=pk)
            mushrooms = Mushroom.objects.filter(category=cat)
            mydata = MushroomSerializer(mushrooms, many=True)
            return Response(mydata.data)
        except Category.DoesNotExist:
            raise Http404


class MushroomsList(APIView):
    def get(self, request, format=None):
        mushrooms = Mushroom.objects.all()
        mydata = MushroomSerializer(mushrooms, many=True)
        return Response(mydata.data)


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
    def post(self, request, format=None):
        class_names = ['Blue mycena', 'Cortinarius violaceus', 'Favolaschia calocera', 'Nấm hầu thủ', 'Nấm hương', 'Nấm kim châm',
                       'Nấm mỡ', 'Nấm mộc nhĩ', 'Nấm độc tán trắng', 'Nấm độc đỏ', 'Nấm đùi gà', 'Podostroma cornu-damae']
        img_path = request.FILES["file"]
        img = Image.open(img_path)
        img_array = tf.keras.preprocessing.image.img_to_array(img)
        resized_img = cv2.resize(img_array, (256, 256))
        ready_img = np.expand_dims(resized_img, axis=0)
        file_name = os.path.dirname("./model_12classes.h5")
        model = load_model("model_12classes.h5")
        predictions = model.predict(ready_img)
        predicted_class = class_names[np.argmax(predictions[0])]
        confidence = np.max(predictions[0])

        return Response({"class": predicted_class, "confidence": float(confidence)})
