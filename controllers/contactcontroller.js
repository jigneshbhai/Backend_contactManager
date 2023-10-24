

//getcontacts

const getContacts = (req,res) => {
    res.status(200).json({message:"get all contacts"})
}

const createContact = (req, res) => {
  res.status(201).json({ message: "create contacts" });
};

const getContact = (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};

const updateContact = (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};