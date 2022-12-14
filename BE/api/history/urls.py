from django.urls import path

from .views import *

urlpatterns = [
    path('history', HistoryList.as_view()),
]
