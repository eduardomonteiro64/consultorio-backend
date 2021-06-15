const express = require("express");

module.exports = function (server) {
  // API Routes
  const router = express.Router();
  server.use("/api", router);

  // userData Routes
  const userInfoService = require("../api/userData/userInfoService");
  userInfoService.register(router, "/userDataEndpoint");

  // healthPlan Routes
  const healthPlanService = require("../api/healthPlans/healthPlanService");
  healthPlanService.register(router, "/healthPlanDataEndpoint");

  // userHistory Routes
  const userHistoryService = require("../api/userHistory/userHistoryService");
  userHistoryService.register(router, "/userHistoryService");

  // userSchedule Routes
  const userScheduleService = require("../api/userSchedule/userScheduleService");
  userScheduleService.register(router, "/userScheduleService");
};
