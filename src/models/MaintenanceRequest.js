//title, description, status, priority, requestedDate
const mongoose = require("mongoose");
const requestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed', 'Cancelled'] //[ملغي , مكتمل , قيد التنفيذ , قيد الانتظار]
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'] //  [مرتفع , متوسط , منخفض]
    },
}, { timestamps: true });
const Request = mongoose.model("Request", requestSchema);
module.exports = Request;