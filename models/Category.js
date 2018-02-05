const mongoose = require('mongoose');
const Schema = mongoose.Schema;

categorySchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, trim: true }
});

module.exports = mongoose.model('Category', categorySchema);

