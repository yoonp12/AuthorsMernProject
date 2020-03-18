const mongoose = require('mongoose')

mongoose.set('runValidators', true);

mongoose.connect("mongodb://localhost/authorsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then (() => console.log("Established a connection to the database"))
    .catch (error => console.log("Something went wrong when connecting to the database", err));