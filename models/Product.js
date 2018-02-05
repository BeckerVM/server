const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, trim: true, required: true },
    image: { type: String, required: true },
    characteristic: [{ type: String }],
    make: { type: String, required: true },
    price: { type: Number, required: true },
    code: { type: String },
    category_id: { type: Schema.Types.ObjectId, required: true, ref: 'Category'}
});

module.exports = mongoose.model('Product', productSchema);


