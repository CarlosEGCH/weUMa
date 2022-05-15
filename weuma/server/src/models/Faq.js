const { Schema, model } = require('mongoose');

const faqSchema = new Schema({
    title: String,
    response: String,
    category: String,
    pinned: Boolean,
}, {
    timestamps: true
})

module.exports = model('Faq', faqSchema);