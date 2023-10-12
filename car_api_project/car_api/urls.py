from django.urls import path
from .views import CarListCreateView, CarDetailView

urlpatterns = [
    path('cars/', CarListCreateView.as_view(), name='car-list-create'),
    path('cars/<int:pk>/', CarDetailView.as_view(), name='car-detail'),
    # path('car-details/<int:car_id>/', CarDetailsView.as_view(), name='car-details')
]
