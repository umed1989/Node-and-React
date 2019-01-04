const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./model/User");
require("./service/passport");

//db
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true },
  () => console.log("Your database is connected to Mlab!!!")
);

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = 5000;
app.listen(PORT, () => console.log(`Your server is running on port: ${PORT}`));
