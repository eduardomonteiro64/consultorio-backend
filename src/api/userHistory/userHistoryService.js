const userHistoryInfo = require("./userHistoryInfo");

userHistoryInfo.methods(["get", "post", "put", "delete"]);
userHistoryInfo.updateOptions({ new: true, runValidators: true });

module.exports = userHistoryInfo;
