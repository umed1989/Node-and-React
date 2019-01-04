const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    if (!req.user) {
      res.status(401).send({ error: "You must be logged in!!!" });
    }

    const charge = await stripe.charges.create({
      amount: 5000,
      currency: "usd",
      description: "50$ for 5 books",
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();
    console.log(user);
    res.send(user);
  });
};
