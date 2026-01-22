# Netflix Data Analysis Dashboard

A complete end-to-end data analytics and visualization project built using Python and Plotly, culminating in a fully static, production-ready interactive dashboard.

This project is developed as part of the **VOIS – AICTE Major Project (October 2025)**.

---

## Live Dashboard

The project is deployed and publicly accessible at:

https://netflix-plotly-dashboard.onrender.com/

The dashboard is fully static and hosted on **Render**, requiring no backend services.

---

## Project Overview

Netflix hosts a vast collection of movies and TV shows across genres, countries, and time periods.  
This project analyzes Netflix’s catalog to extract meaningful insights and trends using data analytics and visualization techniques.

The workflow includes:
1. Data collection and cleaning  
2. Exploratory Data Analysis (EDA)  
3. Visualization using Plotly  
4. Exporting visualizations as JSON  
5. Rendering charts in a static web dashboard  

---

## Objectives

- Analyze Netflix content distribution (Movies vs TV Shows)
- Identify year-wise trends in Netflix content growth
- Discover popular genres, countries, and directors
- Study ratings distribution
- Analyze movie durations and TV show seasons
- Deploy a backend-free interactive dashboard

---

## Dashboard Features

The dashboard contains **8 interactive Plotly charts**:

1. Category Distribution (Movies vs TV Shows)
2. Year-wise Content Trend
3. Top Genres on Netflix
4. Top Producing Countries
5. Ratings Distribution
6. Movie Duration Histogram
7. TV Show Seasons Distribution
8. Top Directors by Content Count

All charts are responsive and dynamically loaded from JSON files.

---

## Data Analysis Notebook

All data preprocessing, analysis, and visualization logic is implemented in the Jupyter Notebook below:

Jupyter Notebook  
https://github.com/Lightning-President-9/VOIS_AICTE_Oct2025_MajorProject_Rohit_Wachnekar/blob/main/Rohit_Wachnekar_Netflix_Data_Analysis.ipynb

The notebook:
- Cleans and preprocesses the dataset
- Performs exploratory data analysis
- Generates Plotly visualizations
- Exports figures as `.json` files

---

## Dataset Information

- **Dataset Name:** Netflix Movies and TV Shows  
- **Source:** Kaggle  
- **URL:** https://www.kaggle.com/datasets/shivamb/netflix-shows  

Dataset attributes include:
- Title
- Type (Movie / TV Show)
- Director
- Cast
- Country
- Release Year
- Rating
- Duration
- Listed Genres

---

## Deployment

This dashboard is fully static and does not require Flask, APIs, or databases.

Supported platforms:
- Render
- GitHub Pages
- Netlify
- Vercel

Deployment is done by serving `index.html` as the root file.

---

## Technologies Used

**Data Analysis**
- Python
- Pandas
- NumPy

**Visualization**
- Plotly

**Frontend**
- HTML5
- CSS3
- JavaScript

**Tools**
- Jupyter Notebook
- GitHub
- Render

---

## Methodology

1. Data acquisition from Kaggle  
2. Data cleaning and preprocessing  
3. Exploratory Data Analysis  
4. Visualization using Plotly  
5. Exporting charts as JSON  
6. Static rendering using JavaScript  
7. Deployment on Render  

---

## Results & Insights

- Movies dominate Netflix’s content catalog
- Rapid growth in content after 2015
- Drama and international genres are most common
- USA and India are major content contributors
- Most TV shows have 1–2 seasons
- Certain directors appear frequently across titles

---
