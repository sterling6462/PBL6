from mushrooms.serializers import CategorySerializer, MushroomSerializer
from .models import *
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404
# Create your views here.


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
        image = request.FILES["file"]
        print(image)
        return Response({"Success": "dkfhjkhjfk"})
