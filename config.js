const config = {
    server: {
        PORT: 1337,
    },
    youtube: {
        URL_END_POINT: "https://www.googleapis.com/youtube/v3/search",
        SEARCH_QUERY: "Football",
        PART: "snippet",
        KEY: "AIzaSyDCIzVTJzE7nY_m7DHUp1S-IkmufvIz64k",
        TYPE: "video",
        ORDER: "date",
        PUBLISHED_AFTER: "2020-09-01T01:59:53Z",
        MAX_RESULTS: 50
    },
    cron_jobs: {
        VIDEO_MINING_INTERVAL: '*/10 * * * *' // every 10 minutes
    },
    db_credentials: {
        MONGO_URI: "mongodb+srv://youtubeapi:youtubeapi@cluster0.btetl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        useNewUrlParser: true

    },
}
module.exports = config;