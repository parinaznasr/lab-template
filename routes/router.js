const express = require('express');
const router = express.Router();

// paths
const news = require('./api/data/news');

// data routes
router.get('/data/news', news.getNews);

module.exports = router;
