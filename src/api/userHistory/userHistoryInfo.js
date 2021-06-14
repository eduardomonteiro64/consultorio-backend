const restful = require("node-restful");
const mongoose = restful.mongoose;

const userHistoryInfoSchema = new mongoose.Schema({
  stateDocument: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
});

module.exports = restful.model("userHistoryInfo", userHistoryInfoSchema);
