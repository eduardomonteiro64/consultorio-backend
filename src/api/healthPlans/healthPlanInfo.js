const restful = require("node-restful");
const mongoose = restful.mongoose;

const healthPlanInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

module.exports = restful.model("healthPlanInfo", healthPlanInfoSchema);
