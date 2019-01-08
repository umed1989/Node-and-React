const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/checkCredit");
const Mailer = require("../service/Mailer");
const SurveyTemplate = require("../service/emailTemplates/surveyTemplate");
const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.body.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, SurveyTemplate(survey));
    mailer.send();
  });
};
