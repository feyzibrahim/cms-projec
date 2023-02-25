const College = require("../models/collegeModel");
// const mongoose = require("mongoose");

// Get College

const getCollege = async (req, res) => {
  const user_id = req.user._id;

  const college = await College.findOne({ user_id });
  res.status(200).json(college);
};

const createCollege = async (req, res) => {
  const { college_name, place, teachers_count, students_count, staff_count } =
    req.body;

  try {
    const user_id = req.user._id;
    const college = await College.create({
      college_name,
      place,
      teachers_count,
      students_count,
      staff_count,
      user_id,
    });

    res.status(200).json(college);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getCollege, createCollege };
