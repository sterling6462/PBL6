from django.urls import path
from .views import *

urlpatterns = [
    path('categories', CategoriesList.as_view()),
    path('mushrooms', MushroomsList.as_view()),
    path('categories/<int:pk>', MushroomByCategory.as_view()),
    path('mushrooms/<int:pk>', MushroomDetail.as_view()),
    path('predict', MushroomPredict.as_view())
]
