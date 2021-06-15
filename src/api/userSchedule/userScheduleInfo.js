const restful = require("node-restful");
const mongoose = restful.mongoose;

const userScheduleInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stateDocument: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = restful.model("userScheduleInfo", userScheduleInfoSchema);
