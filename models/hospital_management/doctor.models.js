import mongoose from "mongoose";
const doctorHoursSchema = new mongoose.Schema({
  timeSpent:{
    type:String,
    required:true
  }
})
const doctorSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  salary:{
    type: String,
    required: true
  },
  qualification:{
    type: Number,
    required: true
  },
  experience:{
    type: Number,
    default: 0
  },
  worksInHospital:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Hospital"
    },
    doctorHoursSchema
]
},{timestamp:true});
export const Doctor = mongoose.model("Doctor", doctorSchema); 