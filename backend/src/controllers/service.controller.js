import serviceModel from '../models/service.model.js'

export const getAllServices = async (req,res) => {
    try {
        const services = await serviceModel.find()
        if(!services){
            return res.status(404).json({
                message:"No services found"
            })
        }
        res.status(200).json({
            message:"Fetched all services",
            data:{
                services
            }
        })
    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error
        })
    }
}

export const getServiceById = async (req,res) => {
    const { id } = req.params;
    if(!id){
        return res.status(400).json({
            message:"No id provided"
        })
    }
    try {
        const service = await serviceModel.findById(id)
        if(!service){
            return res.status(404).json({
                message:"No service found"
            })
        }
        res.status(200).json({
            message:"Fetched service",
            data:{
                service
            }
        })
    } catch (error) {
         res.status(500).json({
            message:"internal server error",
            error
        })
    }
}