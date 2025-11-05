/**
 * Configuration file for MovieGo website
 * Contains API keys and other environment variables
 */

// TMDB API Configuration
const CONFIG = {
    // TMDB API - Replace with your own API credentials from https://www.themoviedb.org/settings/api
    TMDB_API_KEY: '072a17f72156e23e7a495ee220940fae',
    TMDB_ACCESS_TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzJhMTdmNzIxNTZlMjNlN2E0OTVlZTIyMDk0MGZhZSIsIm5iZiI6MTc2MjM0NzgyNy40MzIsInN1YiI6IjY5MGI0YjMzYWFjMzAzZDFkOWI2OTM2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.55HTusXSd6qJEPKUiq8swfMDL6mf1JB91S1Im9zgqpY',
    TMDB_BASE_URL: 'https://api.themoviedb.org/3',
    TMDB_IMG_BASE_URL: 'https://image.tmdb.org/t/p/w500',
    
    // Default region for API requests
    DEFAULT_REGION: 'IN',
    
    // Other configuration settings
    DEFAULT_LANGUAGE: 'all',
    DEFAULT_SORT: 'popularity.desc',
    DEFAULT_PAGE: 1,
    
    // Language mapping
    LANGUAGE_NAMES: {
        'hi': 'Hindi',
        'ta': 'Tamil',
        'te': 'Telugu',
        'ml': 'Malayalam',
        'kn': 'Kannada',
        'bn': 'Bengali',
        'mr': 'Marathi',
        'pa': 'Punjabi',
        'gu': 'Gujarati',
        'or': 'Odia',
        'as': 'Assamese',
        'en': 'English'
    }
}; 
