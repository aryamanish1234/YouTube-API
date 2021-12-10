const config = {
    server: {
        PORT: 1337,
    },
    youtube: {
        URL_END_POINT: "https://www.googleapis.com/youtube/v3/search",
        SEARCH_QUERY: "Football",
        PART: "snippet",
        KEY: "AIzaSyCQpm5PsivHV_Xt8XFg4MQy7S_PyrYHE7Y",
        TYPE: "video",
        ORDER: "date",
        PUBLISHED_AFTER: "2021-12-10T01:59:53Z",
        MAX_RESULTS: 50
    },
    cron_jobs: {
        VIDEO_MINING_INTERVAL: '*/10 * * * *' // every 10 minutes
    },
    db_credentials: {
        MONGO_URI: "mongodb+srv://youtubeapi:youtubeapi@cluster0.btetl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",


    },
}
module.exports = config;