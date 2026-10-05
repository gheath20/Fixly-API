const Customer =require("../models/Customer");
class CustomerController{
                getAll = async (req, res) => {
                    const customers = await Customer.find();
                    res.status(200).json({
                        "success": true,
                        "message": "Operation successful",
                        "data": customers
                    });
            
            
                }
            
                getOne = async (req, res) => {
                    const id = req.params.id;
                    const customer = await Customer.findById(id);
                    if (!customer) return res.status(404).json(
                        {
                            "success": false,
                            "message": "Resource not found"
                        }
                    );
                    res.status(200).json(
                        {
                            "success": true,
                            "message": "Operation successful",
                            "data": customer
                        }
            
                    );
                }
            
                add = async (req, res) => {
                    const { name, phone, email, address, notes } = req.body;
                    if (!name || !phone || !email || !address || !notes) {
                       return  res.status(400).json(
                            {
                                "success": false,
                               "message": "validation error : Missing required fieles"
                            }
                        )
                    }
                    
                    const customerAdd = await Customer.create({ name, phone, email, address, notes });
                    res.status(201).json(
                        {
                            "message": "Operation successful",
                            "data": customerAdd
                            
            
                        }
                    );
            
                }
            
                update = async (req, res) => {
                    const id = req.params.id;
                    const customer = await Customer.findById(id);
                    if (!customer) return res.status(404).json(
                        {
                            "success": false,
                            "message": "Resource not found"
                        }
                    );
                    const { name, phone, email, address, notes } = req.body;
                    const date = await Customer.findByIdAndUpdate(id, { name, phone, email, address, notes });
                    res.status(200).json(
                        {
                            "message": "Operation successful",
                            "data": date
            
            
                        }
                    );
                    
            
            
                    
                }
            
            
                remove = async (req, res) => {
                    const id = req.params.id;
                    const customer = await Customer.findById(id);
                    if (!customer) return res.status(404).json(
                        {
                            "success": false,
                            "message": "Resource not found"
                        }
                    );
                    
                    const dele = await Customer.findByIdAndDelete(id);
                    res.status(200).json(
                        {
                            "message": "Operation successful",
                            "data": dele
            
            
                        }
            
                    )
            
                }



}


module.exports = new CustomerController();