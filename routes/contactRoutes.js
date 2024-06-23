const express = require("express");
const {
  getAllContacts,
  createContacts,
  getContact,
  updateContacts,
  deleteContacts,
} = require("../controllers/contactController");
const router = express.Router();

router.route("/").get(getAllContacts).post(createContacts);

router.route("/:id").get(getContact).put(updateContacts).delete(deleteContacts);

module.exports = router;
