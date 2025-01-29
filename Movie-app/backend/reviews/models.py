from django.db import models

class Review(models.Model):
    movie_id = models.IntegerField()
    review_text = models.TextField()
    sentiment = models.CharField(max_length=10)  # Positive, Neutral, Negative
    created_at = models.DateTimeField(auto_now_add=True)
