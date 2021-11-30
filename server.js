const express = require("express");
const cors = require("cors");

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const mail = require("./sendMail");
// const template = require("./router/template");

app.use("/mail", mail);
// app.use("/template", template);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
