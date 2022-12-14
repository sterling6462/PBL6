from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *
from .serializers import *


# Create your views here.
class HistoryList(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        history = History.objects.filter(user=user).first()
        queryset = HistoryItem.objects.filter(history=history)
        serializer = HistoryItemSerializer(queryset, many=True)
        return Response(serializer.data)

    def delete(self, request):
        user = request.user
        data = request.data

        history_item = HistoryItem.objects.get(id=data.get('id'))
        history_item.delete()

        history = History.objects.filter(user=user).first()
        queryset = HistoryItem.objects.filter(history=history)
        serializer = HistoryItemSerializer(queryset, many=True)
        return Response(serializer.data)
