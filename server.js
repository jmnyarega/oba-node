const { context } = require("./index");

const { PORT, app } = context;

app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
