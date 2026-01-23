# Netflix Data Visualization Dashboard

A static, interactive data visualization dashboard built using **Plotly** to explore trends and patterns in the Netflix Movies and TV Shows dataset.

This project demonstrates how exploratory data analysis can be converted into reusable, production-ready visualizations using Plotly JSON files and static hosting.

---

## Project Links

- **Main GitHub Repository**  
  https://github.com/Lightning-President-9/VOIS_AICTE_Oct2025_MajorProject_Rohit_Wachnekar

- **Jupyter Notebook (Analysis & Chart Generation)**  
  https://github.com/Lightning-President-9/VOIS_AICTE_Oct2025_MajorProject_Rohit_Wachnekar/blob/main/Rohit_Wachnekar_Netflix_Data_Analysis.ipynb

- **Dataset (Kaggle – Netflix Movies and TV Shows)**  
  https://www.kaggle.com/datasets/shivamb/netflix-shows

- **Live Deployment**  
  https://netflix-plotly-dashboard.onrender.com/

---

## Project Overview

This dashboard visualizes Netflix content data using **Plotly Express** and renders the charts statically using **Plotly.js**.

Key characteristics:
- No backend required
- Fully static hosting (Render)
- Reusable Plotly JSON charts
- Responsive and interactive UI

---

## Visualizations Included

1. Content Category Distribution  
2. Year-wise Content Trend  
3. Top Genres  
4. Top Producing Countries  
5. Ratings Distribution  
6. Movie Duration Distribution  
7. TV Show Seasons Distribution  
8. Top Directors  

---

## Repository Structure

```text
netflix-data-visualization-dashboard/
│
├── index.html
├── style.css
├── script.js
│
├── charts/
│   ├── 01_category_distribution.json
│   ├── 02_yearly_trend.json
│   ├── 03_top_genres.json
│   ├── 04_top_countries.json
│   ├── 05_ratings_distribution.json
│   ├── 06_movie_duration_hist.json
│   ├── 07_tv_seasons_distribution.json
│   └── 08_top_directors.json
│
└── README.md
