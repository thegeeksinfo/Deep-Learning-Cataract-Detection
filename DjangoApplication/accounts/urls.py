from django.urls import path
from .views import UserCreate, UserLogin

urlpatterns = [
    path('register/', UserCreate.as_view(), name='register'),
    path('login/', UserLogin.as_view(), name='login'),
]