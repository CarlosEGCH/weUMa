const { Schema, model } = require('mongoose');

const ticketSchema = new Schema({
    email: String,
    category: String,
    title: String,
    message: String,
    senderId: String,
    adminId: String
}, {
    timestamps: true
})

module.exports = model('Ticket', ticketSchema);