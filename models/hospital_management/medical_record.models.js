import mongoose from "mongoose";
const medrecordSchema = new mongoose.Schema({
  
},{timestamp:true});
export const Medrecord = mongoose.model("Medrecord", medrecordSchema); 