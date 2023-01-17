const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Student = require("./models/StudentInfo")

const cors = require("cors")

const url = "mongodb+srv://Tariq:1234@cluster0.ll4xzan.mongodb.net/?retryWrites=true&w=majority"

async function connect(){
    try{
        await mongoose.connect(url)
        console.log("connected to db", { useNewUrlParser: true })
    }catch(error){
        console.log(error)
    }
}

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/api/student/:id",(req,res)=>{
    Student.find().sort({createdAt:-1})
    .then(result=>{
        const data = result.filter(value => JSON.stringify(value.Email) === JSON.stringify(req.params.id))
        res.send(data)
    })
})

app.post("/api/student",(req,res)=>{
    const newStudent = new Student({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        IndexNumber: JSON.stringify(req.body.IndexNumber),
        StudentId: JSON.stringify(req.body.StudentId),
        Status: req.body.Status
    })
    newStudent.save((error, savedNote) => {
        if (error) {
          return res.status(500).send(error);
        }
        return res.send("done")
    })
})



app.post("/api/student/topic/:id", async (req,res)=>{
    try {
        let result = await Student.updateMany({ Email: req.params.id },
        { $set: { Topic: req.body.Topic , Status: req.body.Status} }, { new: true });
        res.json(result);
    } 
    catch (err) {
        res.status(500).json({error: err.message});
    }
    });

{/*
app.post("/api/student/:id",(req,res)=>{
    Student.findOneAndUpdate({ Email: req.body.Email }, { $push: { topics: req.body.topic } }, { new: true }, (error, savedNote) => {
        if (error) {
            return res.status(500).send(error);
        }
        return res.send("done")
    });
});
*/}

connect()
const PORT = 5000
app.listen(PORT,()=>{console.log("Server started")})