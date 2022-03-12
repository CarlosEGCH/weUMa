const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/weuma",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log("Database is connected"))
.catch(err => console.log("Server error: " + err))