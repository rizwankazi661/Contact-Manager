// @desc Get all contacts
// @routes GET /api/contacts
// @access public
const getAllContacts = (req, res) => {
    res.status(200).json({ message: "Fetched all contacts..." })
};

// @desc Create contact
// @routes POST /api/contacts
// @access public
const createContact = (req, res) => {
    res.status(201).json({ message: "Create a contact" })
}

// @desc Update contact
// @routes PUT /api/contacts/:id
// @access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Updated contact with id: ${req.params.id}` })
}

// @desc Delete contact
// @routes DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Deleted contact with id: ${req.params.id}` })
}

// @desc Get contact
// @routes GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Fetched contact with id: ${req.params.id}` })
}

module.exports = {
    getAllContacts,
    createContact,
    updateContact, 
    deleteContact, 
    getContact
};