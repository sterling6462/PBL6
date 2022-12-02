from django.shortcuts import render
from carts.models import Cart
from mushrooms.models import Mushroom
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import *
# Create your views here.


class CartView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        cart = Cart.objects.filter(user=user).first()
        queryset = CartItem.objects.filter(cart=cart)
        serializer = CartItemSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        user = request.user
        cart, _ = Cart.objects.get_or_create(user=user)
        mushroom = Mushroom.objects.get(id=data.get('mushroom'))
        queryset = CartItem.objects.filter(cart=cart)
        print(queryset)
        for i in queryset:
            if i.mushroom == mushroom:
                return Response({"item already existed"})
        cart_item = CartItem(cart=cart, mushroom=mushroom)
        cart_item.save()
        return Response({"success": "item added to your cart"})

    def delete(self, request):
        user = request.user
        data = request.data

        cart_item = CartItem.objects.get(id=data.get('id'))
        cart_item.delete()

        cart = Cart.objects.filter(user=user).first()
        queryset = CartItem.objects.filter(cart=cart)
        serializer = CartItemSerializer(queryset, many=True)
        return Response(serializer.data)
