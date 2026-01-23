async function loadChart(containerId, jsonPath) {
    try {
        const response = await fetch(jsonPath);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status} - ${jsonPath} not found`);
        }

        const fig = await response.json();

        Plotly.newPlot(
            containerId,
            fig.data,
            fig.layout,
            { responsive: true }
        );
    } catch (error) {
        console.error("Chart load error:", error.message);
        document.getElementById(containerId).innerHTML =
            "<p style='color:red;text-align:center;'>Chart failed to load</p>";
    }
}

/* Load all Netflix charts */
loadChart("chart1", "./charts/01_category_distribution.json");
loadChart("chart2", "./charts/02_yearly_trend.json");
loadChart("chart3", "./charts/03_top_genres.json");
loadChart("chart4", "./charts/04_top_countries.json");
loadChart("chart5", "./charts/05_ratings_distribution.json");
loadChart("chart6", "./charts/06_movie_duration_hist.json");
loadChart("chart7", "./charts/07_tv_seasons_distribution.json");
loadChart("chart8", "./charts/08_top_directors.json");
