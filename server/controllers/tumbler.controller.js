const Tumbler = require("../models/tumbler.model");

//find all
const findAll = (req, res) => {
  Tumbler.find({})
    .then((allTumbler) => {
      res.json(allTumbler);
      console.log(allTumbler);
    })
    .catch((err) => {
      res.json({ Message: "Something went wrong", error: err });
    });
};

// fine one by id
const getTumbler = (req, res) => {
  Tumbler.findOne({ _id: req.params.id })
    .then((tumbler) => res.json(tumbler))
    .catch((err) => res.json(err));
};

// create new
const createTumbler = (req, res) => {
  Tumbler.create(req.body)
    .then((newTumbler) => res.json(newTumbler))
    .catch((err) => res.status(400).json(err));
};

// Update
const updateTumbler = (req, res) => {
  Tumbler.findOneAndUpdate({ _id: req.params.id }, req, body, { new: true })
    .then((updatedTumbler) => res.json(updatedTumbler))
    .catch((err) => res.status(400).json(err));
};

const deleteTumbler = (req, res) => {
  Tumbler.deleteOne({ _id: req.params.id })
    .then((deleteConfirmation) => res.json(deleteConfirmation))
    .catch((err) => res.json(err));
};

module.exports = {
  findAll,
  createTumbler,
  getTumbler,
  updateTumbler,
  deleteTumbler,
};
