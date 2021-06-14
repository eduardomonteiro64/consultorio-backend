const userInfo = require("./userInfo");

userInfo.methods(["get", "post", "put", "delete"]);
userInfo.updateOptions({ new: true, runValidators: true });

module.exports = userInfo;
