const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    semester: { type: Number, required: true },
    module: { type: Number, required: true }
});

module.exports = mongoose.model('Resource', ResourceSchema);