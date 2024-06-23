const express = require("express");
const {
  getAllContacts,
  createContacts,
  getContact,
  updateContacts,
  deleteContacts,
} = require("../controllers/contactController");
const router = express.Router();

router.route("/").get(getAllContacts);

router.route("/").post(createContacts);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContacts);

router.route("/:id").delete(deleteContacts);

module.exports = router;
