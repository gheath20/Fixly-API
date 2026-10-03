const mongoose = require("mongoose");
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

async function connectDB(app) {
    return mongoose.connect(MONGODB_URL)
        .then(() => {
            console.log("Connected to MongoDB");
            app.listen(PORT, () => {
                console.log(`Server is Running on: http://localhost:${PORT}`);


            })


        });

}
module.exports = connectDB;