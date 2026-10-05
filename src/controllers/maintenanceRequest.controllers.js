const Request = require("../models/MaintenanceRequest");
class RequestController {
            getAll = async (req, res) => {
                const requests = await Request.find();
                res.status(200).json({
                    "success": true,
                    "message": "Operation successful",
                    "data": requests
                });
        
        
            }
        
            getOne = async (req, res) => {
                const id = req.params.id;
                const request = await Request.findById(id);
                if (!request) return res.status(404).json(
                    {
                        "success": false,
                        "message": "Resource not found"
                    }
                );
                res.status(200).json(
                    {
                        "success": true,
                        "message": "Operation successful",
                        "data": request
                    }
        
                );
            }
        
            add = async (req, res) => {
                const { title, description, status, priority } = req.body;
                if (!title || !description || !status || !priority) {
                   return  res.status(400).json(
                        {
                            "success": false,
                           "message": "validation error : Missing required fieles"
                        }
                    )
                }
                const requestAdd = await Request.create({ title, description, status, priority });
                res.status(201).json(
                    {
                        "message": "Operation successful",
                        "data": requestAdd
                        
        
                    }
                );
        
            }
        
            update = async (req, res) => {
                const id =req.params.id;
                const request = await Request.findById(id);
                if (!request) return res.status(404).json(
                    {
                        "success": false,
                        "message": "Resource not found"
                    }
                );
                const { title, description, status, priority } = req.body;
                const date = await Request.findByIdAndUpdate(id, { title, description, status, priority });
                res.status(200).json(
                    {
                        "message": "Operation successful",
                        "data": date
        
        
                    }
                );
                
        
        
                
            }
        
        
            remove = async (req, res) => {
                const id = req.params.id;
                const request = await Request.findById(id);
                if (!request) return res.status(404).json(
                    {
                        "success": false,
                        "message": "Resource not found"
                    }
                );
                
                const dele = await Request.findByIdAndDelete(id);
                res.status(200).json(
                    {
                        "message": "Operation successful",
                        "data": dele
        
        
                    }
        
                )
        
            }

}

module.exports = new RequestController();