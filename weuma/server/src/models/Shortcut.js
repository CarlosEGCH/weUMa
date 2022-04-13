const { Schema, model } = require('mongoose');

const shortcutSchema = new Schema({
    message: String,
    category: String,
    adminId: String,
}, {
    timestamps: true
})

module.exports = model('Shortcut', shortcutSchema);