const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength: [
            2,
            "First Name must be at least 2 characters long"
        ],
        required: [
            true,
            "First Name is required"
        ]
    },
    lastName: {
        type: String,
        minlength: [
            2,
            "Last Name must be at least 2 characters long"
        ],
        required: [
            true,
            "Last Name is required"
        ]
    }
});
module.exports.Author = mongoose.model('Author', AuthorSchema);