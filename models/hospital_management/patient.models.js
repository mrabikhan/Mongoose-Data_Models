import mongoose from "mongoose";
const patientSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  dignosedWith:{
    type: String,
    required: true
  },
  age:{
    type:Number,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  bloodgroup:{
    type: String,
    enum:['A+','B+','O+','A-','B-','O-','AB+','AB-'],
    required: true
  },
  gender:{
    type: String,
    enum:['Male', 'Female', 'Others'],
    required: true
  },
  addmittedIn:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Hospital'
  }
},{timestamp:true});
export const Patient = mongoose.model("Patient", patientSchema); 