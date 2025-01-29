from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Review
from .serializers import ReviewSerializer
from .utils import text_analysis

class ReviewAPIView(APIView):
    def get(self, request, movie_id=None):
        if movie_id:
            # Fetch reviews for the specific movie
            reviews = Review.objects.filter(movie_id=movie_id)
        else:
            # Fetch all reviews (optional)
            reviews = Review.objects.all()

        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        movie_id = request.data.get('movie_id')
        review_text = request.data.get('review_text')

        if not movie_id or not review_text:
            return Response({"error": "movie_id and review_text are required."}, status=status.HTTP_400_BAD_REQUEST)

        # Perform sentiment analysis
        sentiment = text_analysis(review_text)

        # Save to the database
        review = Review.objects.create(movie_id=movie_id, review_text=review_text, sentiment=sentiment)

        serializer = ReviewSerializer(review)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
