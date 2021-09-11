const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    // required: "Enter a name for this workout",
  },
  cardio_name: {
    type: String,
    trim: true,
    // required: "Enter a name for this Cardio session",
  },
  type: {
    type: String,
    trim: true,
    enum: {
      values: ["cardio", "resistance"],
      message: "{VALUE} is not supported",
    },
    sets: {
      type: Number,
    },
    distance: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    resistance_duration: {
      type: Number,
    },
    weight: {
      type: Number,
    },
  },
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
