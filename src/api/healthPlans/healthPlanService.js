const healthPlanInfo = require("./healthPlanInfo");

healthPlanInfo.methods(["get", "post", "put", "delete"]);
healthPlanInfo.updateOptions({ new: true, runValidators: true });

module.exports = healthPlanInfo;
