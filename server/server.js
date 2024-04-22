const express = require("express");
const app = express();
const cors = require('cors')
app.use(express.json());
const connectToDB = require("./config/config.js");
const invenRoute = require("./routes/inventory.routes.js");
const cookieRoute = require("./routes/cookie.routes.js");
const shapeRoute = require("./routes/shape.route.js");
const PORT = 3001;

connectToDB();
app.use(cors());


//routes
app.use("/inven/ingredients", invenRoute);
app.use("/cookie",cookieRoute);
app.use("/shape",shapeRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get("/", (req, res) => {
  res.send("Hello from Node API");
});
