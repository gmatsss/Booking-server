const connectDB = require("../config/db");

exports.test = (req, res) => {
  console.log("Test endpoint hit");
  res.send("Test endpoint is working");
};

exports.testDB = async (req, res) => {
  try {
    await connectDB();
    console.log("Database connection test hit");
    res.send("Database connection is working");
  } catch (err) {
    console.error("Database connection test failed:", err.message);
    res.status(500).send("Database connection failed");
  }
};
