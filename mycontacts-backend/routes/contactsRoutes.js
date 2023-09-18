const express = require('express');
const router = express.Router();
const { getAllContacts, createContact, updateContact, deleteContact, getContact } = require("../controllers/contactController")

router.route("/").get(getAllContacts);

router.route("/").post(createContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

router.route("/:id").get(getContact);

module.exports = router;    