from django.urls import path
from .views import ReviewAPIView

urlpatterns = [
    path('reviews/', ReviewAPIView.as_view(), name='review_list'),  # This is for POST request (to add reviews)
    path('reviews/<int:movie_id>/', ReviewAPIView.as_view(), name='review_detail'),  # This is for GET request (to fetch reviews)
]
