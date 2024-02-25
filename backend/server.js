const express =require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require('./Routes/userRoutes');
const chatRoutes =require('./Routes/chatRoutes')
const {notFound,errorHandler} =require('./middleware/errorMiddleware');

dotenv.config();
const app=express();
connectDB();

app.use(express.json()); 



app.get("/",(req,res)=>{
    res.send("Api is running");
});

app.use('/api/user', userRoutes)
app.use('/api/chat',chatRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT=process.env.PORT || 8000
app.listen(PORT,console.log(`Server started on PORT ${PORT}`));