const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

const url = "mongodb+srv://Tariq:1234@cluster0.ll4xzan.mongodb.net/?retryWrites=true&w=majority"
const Student = require("./models/StudentInfo")

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
        StudentId: JSON.stringify(req.body.StudentId)
    })
    newStudent.save((error, savedNote) => {
        if (error) {
          return res.status(500).send(error);
        }
        return res.send("done")
    })
})

app.put("/api/student/:id", (req, res) => {
    // Find the student by the provided ID
    Student.findByIdAndUpdate(req.params.id, (err, student) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (!student) {
            return res.status(404).send("Student not found");
        }
        res.send(student)
    });
});


connect()
const PORT = 5000
app.listen(PORT,()=>{console.log("Server started")})