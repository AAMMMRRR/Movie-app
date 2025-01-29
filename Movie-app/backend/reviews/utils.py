from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from textblob import TextBlob

def text_analysis(text):

    # Initialize VADER sentiment analyzer
    analyzer = SentimentIntensityAnalyzer()

    # Define sentiment label functions
    def vader_sentiment_label(score):
        if score >= 0.05:
            return 'Positive'
        elif score <= -0.05:
            return 'Negative'
        else:
            return 'Neutral'

    def textblob_sentiment_label(score):
        if score > 0.1:  # Adjusted threshold for positive
            return 'Positive'
        elif score < -0.1:  # Adjusted threshold for negative
            return 'Negative'
        else:
            return 'Neutral'

    def combined_sentiment(vader_score, textblob_score):
        if vader_score >= 0.05 and textblob_score > 0.1:
            return 'Positive'
        elif vader_score <= -0.05 and textblob_score < -0.1:
            return 'Negative'
        else:
            return 'Neutral'
    # VADER sentiment
    vader_score = analyzer.polarity_scores(text)['compound']

    # TextBlob sentiment
    textblob_score = TextBlob(text).sentiment.polarity

    # Combined sentiment
    combined_result = combined_sentiment(vader_score, textblob_score)

    return combined_result



