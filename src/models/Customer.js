//name, phone, email, address, notes
const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    notes: String
});
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;