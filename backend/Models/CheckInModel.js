import mongoose from "mongoose";

const CheckInSchema = mongoose.Schema({
    registerNo:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    city: {
        type: String,
        required:true,
    },
    district: {
        type: String,
        required:true,
    },
    state: {
        type: String,
        required:true,
    },
    pincode: {
        type: String,
        required:false,
    },
    phone: {
        type: String,
        required:true,
    },
    date: {
        type: String,
        required:true,
    },
    time: {
        type: String,
        required: true,
    },
    commingFrom: {
        type: String,
        required: false,
    },
    purpose: {
        type: String,
        required: false,
    },
    durationOfStay: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    male: {
        type: Number,
        default: 0,
    },
    female: {
        type: Number,
        default: 0,
    },
    children: {
        type: Number,
        default: 0,
    },
    roomNo: {
        type: Number,
        default: 0,
    },
    advance: {
        type: Number,
        default: 0,
    },
},
{ timestamps: true}

);

export default mongoose.model("Customer",CheckInSchema); 