const router = require("express").Router();
const mailer = require("./mailer");
const fs = require("fs");

router.route("/send/").post(async (req, res) => {
  var MAIL_TO = req.body.MAIL_TO;
  var MAILER_SUBJECT = req.body.MAILER_SUBJECT;
  var BID_AMMOUNT = req.body.BID_AMMOUNT;
  try {
    var template = fs.readFileSync("templates/Bid.html", {
      encoding: "utf-8",
    });

    var template = template.replace("{SUBJECT}", "hello world");
    var template = template.replace("{NAME}", "Abhijeet Gavali");
    var template = template.replace("{BIDTITLE}", "Submmiting issues");
    var template = template.replace("{BIDAMMOUNT}", BID_AMMOUNT);
    var props = {
      MAIL_TO,
      MAILER_SUBJECT,
      MAILER_TEMPLATE: template,
    };
    await mailer(props);
    res.status(200).send("ok");
  } catch (error) {
    res.status(401).send(err);
  }
});

// exporting the module
module.exports = router;
