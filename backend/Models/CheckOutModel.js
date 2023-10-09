import mongoose, { mongo } from "mongoose";

const CheckOutSchema = mongoose.Schema({
    registerNo:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    date: {
        type: String,
        required:true,
    },
    time: {
        type: String,
        required: true,
    },
    roomNo: {
        type: Number,
        default: 0,
    },
    billAmount: {
        type: Number,
        default: 0,
    },   
})

export default mongoose.model("checkOut", CheckOutSchema);

