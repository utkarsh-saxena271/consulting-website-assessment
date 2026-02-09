import contactModel from '../models/contactInquiry.model.js'

export const createInquiry = async (req,res) => {
    const { name, email, message} = req.body;
    if(!name || !email || !message){
        return res.status(400).json({
            message:"Fill all fields"
        })
    }
    try {
        const inquiry = await contactModel.create({
            name,email,message
        })
        if(!inquiry){
            return res.status(400).json({
                message:"Error submitting inquiry, please try again"
            })
        }
        res.status(201).json({
            message:"Inquiry submitted successfully",
            data:{
                inquiry
            }
        })
    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error
        })
    }
}

export const getAllInquiries = async (req,res) => {
    try {
        const inquiries = await contactModel.find()
        if(!inquiries){
            return res.status(404).json({
                message:"No inquiries found"
            })
        }
        res.status(200).json({
            message:"Fetched all inquiries",
            data:{
                inquiries
            }
        })
    } catch (error) {
         res.status(500).json({
            message:"internal server error",
            error
        })
    }
}