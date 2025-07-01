# Movies Sentiment Analysis

## About
Movies Sentiment Analysis is a Python-based project that analyzes movie review sentiments using hybrid approaches (VADER and TextBlob) and machine learning models (Naive Bayes, Random Forest, SVM). It processes movie data from an Excel file, performs sentiment analysis, and provides an interactive tool for real-time sentiment prediction.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Logic Description](#logic-description)
- [Usage](#usage)
- [Contributing](#contributing)
- [Repository](#repository)

## Features
- **Data Preprocessing**: Cleans movie review comments by removing HTML tags, URLs, special characters, and stopwords, and normalizes text case.
- **Sentiment Analysis**:
  - **Hybrid Approach**: Combines VADER and TextBlob for sentiment scoring (Positive, Negative, Neutral).
  - **Machine Learning Models**: Uses Naive Bayes, Random Forest, and SVM for sentiment classification.
- **Model Evaluation**: Compares model accuracies using a bar chart visualization with Plotly.
- **Interactive Tool**: Allows users to input text and receive sentiment predictions from multiple models.
- **Data Persistence**: Saves trained models and TF-IDF vectorizer for reuse.

## Installation
1. **Clone the Repository**:
   - Clone the project from GitHub: `https://github.com/AAMMMRRR/Movie-app/blob/main/Movie-app`.
   - Navigate to the project directory.

2. **Install Python**:
   - Ensure Python 3.11+ is installed. Follow the [official Python installation guide](https://www.python.org/downloads/) if needed.

3. **Install Dependencies**:
   - Run `pip install -r requirements.txt` to install required packages.

4. **Download Data**:
   - Place the `movies_data.xlsx` file in the project directory or update the file path in `Movies.ipynb`.

5. **Run the Notebook**:
   - Open `Movies.ipynb` in Jupyter Notebook or JupyterLab.
   - Execute the cells sequentially to preprocess data, train models, and use the interactive tool.

## Dependencies
- pandas: Data manipulation and Excel file handling.
- spacy: Stopword removal and text processing.
- vaderSentiment: Sentiment analysis using VADER.
- textblob: Sentiment analysis using TextBlob.
- sklearn: Machine learning models and TF-IDF vectorization.
- plotly: Visualization of model performance.
- emoji: Emoji handling in text preprocessing.

Refer to `requirements.txt` for specific versions.

## Project Structure
- **Movies.ipynb**: Jupyter notebook containing data preprocessing, sentiment analysis, model training, and interactive tool.
- **movies_data.xlsx**: Input dataset with movie details and reviews.
- **svm_model.pkl**: Saved SVM model for sentiment prediction.
- **naive_bayes_model.pkl**: Saved Naive Bayes model.
- **random_forest_model.pkl**: Saved Random Forest model.
- **tfidf_vectorizer.pkl**: Saved TF-IDF vectorizer for text transformation.

## Logic Description
The project processes movie review data and performs sentiment analysis using a structured approach:

1. **Data Loading**:
   - Loads movie data from an Excel file containing columns like Movie Name, Year, Genres, Rating, Comment, and Sentiment_Label.

2. **Data Preprocessing**:
   - Cleans review comments by removing HTML tags, URLs, special characters, and emojis (converted to text descriptions).
   - Normalizes text to lowercase for consistency.
   - Removes stopwords and single-letter tokens to focus on meaningful words.

3. **Sentiment Analysis**:
   - **VADER**: Analyzes comments to assign sentiment scores (Positive, Negative, Neutral) based on a compound score threshold.
   - **TextBlob**: Computes sentiment polarity and assigns labels using adjusted thresholds.
   - **Combined Approach**: Integrates VADER and TextBlob scores, labeling as Positive or Negative only if both models agree, otherwise Neutral.
   - **Machine Learning Models**: Uses TF-IDF vectorized comments to train Naive Bayes, Random Forest, and SVM models for sentiment classification.

4. **Model Evaluation**:
   - Compares accuracies of VADER, TextBlob, Combined, Naive Bayes, Random Forest, and SVM using cross-validation (for ML models) and direct accuracy (for hybrid models).
   - Visualizes results in a bar chart to identify the best-performing model.

5. **Interactive Tool**:
   - Allows users to input text and receive sentiment predictions from VADER, TextBlob, Combined, and ML models.
   - Saves trained models and TF-IDF vectorizer for efficient reuse.
   - Provides a champion model (Combined) for streamlined sentiment prediction.

6. **Error Handling**:
   - Handles missing data by checking for null values.
   - Ensures robust text preprocessing to avoid errors in sentiment analysis.
   - Displays user-friendly messages for invalid inputs in the interactive tool.

## Usage
1. **Run the Notebook**:
   - Open `Movies.ipynb` in Jupyter Notebook or JupyterLab.
   - Execute all cells to preprocess data, train models, and generate visualizations.

2. **Interactive Sentiment Analysis**:
   - Run the interactive tool cell to input text and view sentiment predictions from all models.
   - Enter text or type 'exit' to quit.
   - Example inputs:
     - "The movie was fine; it wasn’t great, but it wasn’t terrible either." → Neutral (Combined)
     - "This is the worst product I’ve ever used; a complete waste of money." → Negative (Combined)
     - "The vacation was absolutely amazing; I couldn’t have asked for a better experience!" → Positive (Combined)

3. **Champion Model**:
   - Use the champion model cell for predictions using only the Combined approach.
   - Input text and view the sentiment label.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make changes with clear, descriptive commits.
4. Push your branch and create a pull request.
5. Ensure changes align with the project’s goals.


## Repository (For Reviewing Jupyter Notebook File)
[https://github.com/AAMMMRRR/Movie-app/blob/main/Movie-app/Data/Movies.ipynb]
