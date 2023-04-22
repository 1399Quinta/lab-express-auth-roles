module.exports = (app) => {
  // Base routes
  const indexRouter = require("./index.routes");
  app.use("/", indexRouter);

  // Auth routes
  const authRouter = require("./auth.routes");
  app.use("/", authRouter);

  //STUDENT
  const indexStudent = require("./users.routes");
  app.use("/users", indexStudent);
};
