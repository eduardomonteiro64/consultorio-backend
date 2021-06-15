const restful = require("node-restful");
const mongoose = restful.mongoose;

const userInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  federalDocument: { type: String },
  stateDocument: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String },
  birthDate: { type: String, required: true },
  telephone: { type: String, required: true },
  healthPlan: { type: String, required: false },
  postalNumber: { type: Number, required: true },
  streetName: { type: String, required: true },
  districtName: { type: String, required: true },
  cityName: { type: String, required: true },
  stateName: { type: String, required: true },
});

module.exports = restful.model("userInfo", userInfoSchema);
