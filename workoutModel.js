const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for this workout",
  },
  cardio_name: {
    type: String,
    trim: true,
    required: "Enter a name for this Cardio session",
  },
  type: {},
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
