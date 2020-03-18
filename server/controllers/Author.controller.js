const { Author } = require('../models/Author.model')

module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then(Authors => res.json(Authors))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
};

module.exports.oneAuthor = (req, res) => {
    const {id} = req.params
    Author.findOne({ _id:id })
    .then(oneAuthor => res.json(oneAuthor))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.create = (req, res) => {
    const {firstName, lastName} = req.body
    Author.create({
        firstName,
        lastName
    })
    .then(Author => res.json(Author))
    .catch(err => res.status(400).json(err))
}

module.exports.updateAuthor = (req, res) => {
    const {id} = req.params
    Author.updateOne({ _id: id }, req.body, { new: true })
    .then(updateAuthor => res.json(updateAuthor))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    const {id} = req.params
    Author.deleteOne ({ _id: id })
    .then(result => res.json(result))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
}