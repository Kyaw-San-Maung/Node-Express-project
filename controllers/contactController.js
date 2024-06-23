//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getAllContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Get contact
//@route GET /api/contacts
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createContacts = (req, res) => {
  res.status(201).json({ message: "Create Contact" });
};

//@desc Update Contact
//@route POST /api/contacts
//@access public

const updateContacts = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc Update Contact
//@route POST /api/contacts
//@access public

const deleteContacts = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};
module.exports = {
  getAllContacts,
  createContacts,
  getContact,
  updateContacts,
  deleteContacts,
};
