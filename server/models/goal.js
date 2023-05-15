const mongoose = require("mongoose");


const goalSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    currentWeight: {
        type: Number,
        required: true,
    },
    goalWeight: {
        type: Number,
        required: true,
    },
    muscleGain: {
        type: Number,
        required: true,
    },
    exerciseDays: {
        type: Number,
        required: true,
    },
});

const Goal = mongoose.model("Goal", goalSchema);


module.exports = {Goal};