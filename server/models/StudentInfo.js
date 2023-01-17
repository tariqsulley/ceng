const mongoose = require("mongoose")
const Schema = mongoose.Schema

const StudentSchema = new Schema({
    FirstName:{
        type: String
    },
    LastName:{
        type:String
    },
    Email:{
        type:String
    },
    IndexNumber:{
        type:String
    },
    StudentId:{
        type:String
    },
    Topic:{
        type:String
    },
    Status:{
        type:String
    }
},{timestamps:true})

const Student = mongoose.model("student_info",StudentSchema)

module.exports = Student