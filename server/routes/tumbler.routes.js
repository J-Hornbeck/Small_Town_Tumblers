const TumblerController = require("../controllers/tumbler.controller");

module.exports = (app) => {
  app.get("/api/tumbler", TumblerController.findAll); //change function to a function from controllers
  app.get("/api/tumbler/:id", TumblerController.getTumbler); //change function to a function from controllers
  app.post("/api/tumbler", TumblerController.createTumbler); //change function to a function from controllers
  app.delete("/api/tumbler/:id", TumblerController.deleteTumbler);
  app.put("/api/tumbler/:id", TumblerController.updateTumbler);
};
