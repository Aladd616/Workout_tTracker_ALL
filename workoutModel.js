const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    

});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
