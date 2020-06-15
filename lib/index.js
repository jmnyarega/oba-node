const routes = [
  require("./authenticate/routes"),
  require("./company/index"),
  require("./file/index"),
];

module.exports = function router(ctx) {
  return routes.forEach((route) => {
    route(ctx);
  });
};
