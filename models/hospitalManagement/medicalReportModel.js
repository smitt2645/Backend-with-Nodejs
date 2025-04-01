import mongoose, { Model, Schema } from "mongoose";

export const medicalReportSchema = new Schema({

},{timestamps:true})

export const medicalReportModel = new Model("MedicalReport",medicalReportSchema)
