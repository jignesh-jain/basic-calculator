const mongoose = require("mongoose");

const calculationSchema = mongoose.Schema(
  {
    expression: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Calculation",
  calculationSchema,
  "calculations"
);
