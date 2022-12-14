from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView

from .views import *

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
]
