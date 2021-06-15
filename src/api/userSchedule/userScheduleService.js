const userScheduleInfo = require("./userScheduleInfo");

userScheduleInfo.methods(["get", "post", "put", "delete"]);
userScheduleInfo.updateOptions({ new: true, runValidators: true });

module.exports = userScheduleInfo;
