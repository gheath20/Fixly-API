const Review =require("../models/Review");
class ReviewController{
        getAll = async (req, res) => {
            const reviews = await Review.find();
            res.status(200).json({
                "success": true,
                "message": "Operation successful",
                "data": reviews
            });
    
    
        }
    
        getOne = async (req, res) => {
            const id = req.params.id;
            const review = await Review.findById(id);
            if (!review) return res.status(404).json(
                {
                    "success": false,
                    "message": "Resource not found"
                }
            );
            res.status(200).json(
                {
                    "success": true,
                    "message": "Operation successful",
                    "data": review
                }
    
            );
        }
    
        add = async (req, res) => {
            const { reviewerName, rating, comment } = req.body;
            if (!reviewerName || !rating || !comment) {
               return  res.status(400).json(
                    {
                        "success": false,
                       "message": "validation error : Missing required fieles"
                    }
                )
            }
            const reviewAdd = await Review.create({ reviewerName, rating, comment });
            res.status(201).json(
                {
                    "message": "Operation successful",
                    "data": reviewAdd
                    
    
                }
            );
    
        }
    
        update = async (req, res) => {
            const id = req.params.id;
            const review = await Review.findById(id);
            if (!review) return res.status(404).json(
                {
                    "success": false,
                    "message": "Resource not found"
                }
            );
            const { reviewerName, rating, comment } = req.body;
            const date = await Review.findByIdAndUpdate(id, { reviewerName, rating, comment });
            res.status(200).json(
                {
                    "message": "Operation successful",
                    "data": date
    
    
                }
            );
            
    
    
            
        }
    
    
        remove = async (req, res) => {
            const id = req.params.id;
            const review = await Review.findById(id);
            if (!review) return res.status(404).json(
                {
                    "success": false,
                    "message": "Resource not found"
                }
            );
            
            const dele = await Review.findByIdAndDelete(id);
            res.status(200).json(
                {
                    "message": "Operation successful",
                    "data": dele
    
    
                }
    
            )
    
        }

}




module.exports = new ReviewController();
