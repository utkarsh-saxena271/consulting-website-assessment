import mongoose from "mongoose";

const contactInquirySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    }
}, { timestamps: true });

const contactInquiryModel = mongoose.model('ContactInquiry', contactInquirySchema);
export default contactInquiryModel;