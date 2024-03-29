const mongoose = require("mongoose")

const connectDB = async() => {
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI
            // ,{
            // useNewurlParser:true,
            // useUnifiedTopology: true,
            // useFindAndModify:true,
        // }
        );
        console.log(`mongoDDconnected: ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;