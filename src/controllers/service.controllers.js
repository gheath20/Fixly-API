const Service = require("../models/Service");
class ServiceController {
    getAll = async (req, res) => {
        const services = await Service.find();
        res.status(200).json({
            "success": true,
            "message": "Operation successful",
            "data": services
        });


    }

    getOne = async (req, res) => {
        const id = req.params.id;
        const service = await Service.findById(id);
        if (!service) return res.status(404).json(
            {
                "success": false,
                "message": "Resource not found"
            }
        );
        res.status(200).json(
            {
                "success": true,
                "message": "Operation successful",
                "data": service
            }

        );
    }

    add = async (req, res) => {
        const { name, description, price, duration, isAvailable } = req.body;
        if (!name || !description || !price || !duration || !isAvailable) {
           return  res.status(400).json(
                {
                    "success": false,
                   "message": "validation error : Missing required fieles"
                }
            )
        }
        const serviceAdd = await Service.create({ name, description, price, duration, isAvailable });
        res.status(201).json(
            {
                "message": "Operation successful",
                "data": serviceAdd
                

            }
        );

    }

    update = async (req, res) => {
        const id = req.params.id;
        const service = await Service.findById(id);
        if (!service) return res.status(404).json(
            {
                "success": false,
                "message": "Resource not found"
            }
        );
        const { name, description, price, duration, isAvailable } = req.body;
        const date = await Service.findByIdAndUpdate(id, { name, description, price, duration, isAvailable });
        res.status(200).json(
            {
                "message": "Operation successful",
                "data": date


            }
        );
        


        
    }


    remove = async (req, res) => {
        const id = req.params.id;
        const service = await Service.findById(id);
        if (!service) return res.status(404).json(
            {
                "success": false,
                "message": "Resource not found"
            }
        );
        
        const dele = await Service.findByIdAndDelete(id);
        res.status(200).json(
            {
                "message": "Operation successful",
                "data": dele


            }

        )

    }


}

module.exports = new ServiceController();