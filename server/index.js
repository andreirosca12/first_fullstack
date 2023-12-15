const express = require ("express")
const app = express();

const UserModel= require("./models/Users")

const cors = require("cors")

app.use(express.json())
app.use(cors())

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://andrei:andreicluj@cluster0.u2pvagz.mongodb.net/socialmedia?retryWrites=true&w=majority")

app.get("/getUsers",async (req,res)=>{
    try {
        const result = await UserModel.find({});
        res.json(result);
      } catch (err) {
        res.json(err);
      }
})

app.post("/createUser",async (req,res) =>{
    const user=req.body
    const newUser = new UserModel(user)
    await newUser.save()
    res.json(user)
})

app.listen(3001,() =>{
    console.log("Serverul merge")
})