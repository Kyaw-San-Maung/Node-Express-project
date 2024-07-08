const express = require("express");
const {
  getAllContacts,
  createContacts,
  getContact,
  updateContacts,
  deleteContacts,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.use(validateToken);
router.route("/").get(getAllContacts).post(createContacts);

router.route("/:id").get(getContact).put(updateContacts).delete(deleteContacts);

module.exports = router;
