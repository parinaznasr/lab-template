const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: String,
    date: Date,
    content: String
});

const News = mongoose.model('News', newsSchema);
module.exports = News;
