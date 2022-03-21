const mongoose = require("mongoose");

const TumblerSchema = new mongoose.Schema(
  {
    Name: {
      firstName: {
        type: String,
        required: ["First name is required and must be at least 3 letters"],
        minLength: [3, "First name must be at least 3 letters"],
      },
      lastName: {
        type: String,
        required: ["Last name is required and must be at least 3 letters"],
        minLength: [3, "Last name must be at least 3 letters"],
      },
    },
    Email: {
      type: String,
      required: ["Email required"],
    },
    Phone: {
      type: String,
      required: ["Phone number required"],
      minLength: [10, "Phone numbers are 10 numbers long"],
      maxLength: [10, "Phone numbers are 10 numbers long"],
    },
    Shipping: {
      address: {
        type: String,
        required: ["Address required"],
        minLength: [3, "Address not long enough"],
      },
      address2: {
        type: String,
      },
      state: {
        type: String,
        required: ["State must be at least 2 letters"],
        minLength: [2, "State must be at least 2 letters"],
      },
      zip: {
        type: String,
        required: ["Zip is required and must be at least 5 numbers"],
        minLength: [5, "Zip must be at least 5 numbers"],
      },
    },
    Decal: {
      type: String,
      required: ["Decal required"],
      minLength: [3, "Decal must be at least 3 letters"],
    },
    Concept: {
      type: String,
      required: ["Concept is required"],
      minLength: [3, "Concept must be at least 3 letters"],
    },
    Details: {
      type: String,
      required: ["Please provide more details about your request"],
      minLength: [3, "Details must be at least 3 letters"],
    },
    Glitter: {
      type: String,
    },
    TumblerSize: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Tumbler", TumblerSchema);
