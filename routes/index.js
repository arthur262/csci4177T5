var express = require("express");
var router = express.Router();
const port = 3000;

var user = {
  email: "",
  firstName: "",
  id: "",
};
var messages = {
  message: "",
  success: true,
};

router.put("/update/id", (req, res) => {
  const input = req.body;

  if (input?.email && input?.firstName) {
    user.email = input.email;
    user.firstName = input.firstName;
    messages.message = "User updated";
    res.send(messages);
  } else {
    res.status(500).send("sends error");
  }
});

router.post("/add", (req, res) => {
  const input = req.body;

  if (input?.email && input?.firstName) {
    user.email = input.email;
    user.firstName = input.firstName;
    user.id = "70s9ada9sd";
    res.json({
      message: "User add",
      success: true,
    });
  } else {
    res.send("sends error");
  }
});

router.get("/update/:id", (req, res) => {
  res.json({ success: true, user });
});

module.exports = router;
