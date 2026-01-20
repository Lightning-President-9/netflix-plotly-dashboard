function loadChart(divId, jsonPath) {
  fetch(jsonPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${jsonPath}`);
      }
      return response.json();
    })
    .then(fig => {
      Plotly.newPlot(divId, fig.data, fig.layout, {
        responsive: true,
        displayModeBar: false
      });
    })
    .catch(error => console.error(error));
}

// Load all 8 charts
loadChart("chart1", "./charts/01_category_distribution.json");
loadChart("chart2", "./charts/02_yearly_trend.json");
loadChart("chart3", "./charts/03_top_genres.json");
loadChart("chart4", "./charts/04_top_countries.json");
loadChart("chart5", "./charts/05_ratings_distribution.json");
loadChart("chart6", "./charts/06_movie_duration_hist.json");
loadChart("chart7", "./charts/07_tv_seasons_distribution.json");
loadChart("chart8", "./charts/08_top_directors.json");
