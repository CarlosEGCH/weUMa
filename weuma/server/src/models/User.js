const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: String,
    studentId: String,
    phone: String,
    email: String,
    password: String,
    role: String
}, {
    timestamps: true
});

module.exports = model("User", userSchema);