const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// Get all workouts (only user's workouts)
const getWorkouts = async (req, res) => {
  const user_id = req.user._id; // Extract user ID from request
  const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// Get a single workout (only if owned by user)
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const workout = await Workout.findById(id);
  if (!workout || workout.user_id.toString() !== req.user._id.toString()) {
    return res.status(404).json({ error: "Workout not found or unauthorized" });
  }

  res.status(200).json(workout);
};

// Create a new workout (assign to user)
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  let emptyFields = [];
  if (!title) emptyFields.push("title");
  if (!reps) emptyFields.push("reps");
  if (!load) emptyFields.push("load");

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const user_id = req.user._id;
    const workout = await Workout.create({ title, reps, load, user_id });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a workout (only if owned by user)
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id, user_id: req.user._id });
  if (!workout) {
    return res.status(400).json({ error: "Workout not found or unauthorized" });
  }

  res.status(200).json(workout);
};

// Update a workout (only if owned by user)
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id, user_id: req.user._id },
    { ...req.body }
  );

  if (!workout) {
    return res.status(400).json({ error: "Workout not found or unauthorized" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
