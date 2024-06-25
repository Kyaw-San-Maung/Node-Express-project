const asynHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getAllContacts = asynHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Get contact
//@route GET /api/contacts
//@access public

const getContact = asynHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createContacts = asynHandler(async (req, res) => {
  console.log("The request body data is : ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

//@desc Update Contact
//@route POST /api/contacts
//@access public

const updateContacts = asynHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete Contact
//@route DELETE /api/contacts
//@access public

const deleteContacts = asynHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});
module.exports = {
  getAllContacts,
  createContacts,
  getContact,
  updateContacts,
  deleteContacts,
};
