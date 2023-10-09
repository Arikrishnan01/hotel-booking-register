import { response } from "express";
import  CheckInModel  from "../Models/CheckInModel.js";

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: POST
 * PATH: /checkIn
 */

export const creatCheckIn = (req, res ) => {
    const {
        registerNo = 0,
        name = "",
        city = "",
        district = "",
        state = "",
        pincode = "",
        phone = "",
        date = "",
        time = "",
        commingFrom = "",
        purpose = "",
        durationOfStay = "",
        age = "",
        male = 0,
        female = 0,
        children = 0,
        roomNo = 0,
        advance = 0
    } = req.body;

    const CheckIn = new CheckInModel({
        registerNo ,
        name ,
        city ,
        district ,
        state ,
        pincode ,
        phone ,
        date ,
        time ,
        commingFrom ,
        purpose ,
        durationOfStay ,
        age ,
        male ,
        female ,
        children ,
        roomNo ,
        advance 
    })
    CheckIn.save()
        .then((response) => {
            if(response._id){
                return res.status(200).json({
                    message: "CheckIn details created successfully",
                    data: response
                });
            }
        })
        .catch((error) => {
            return res.status(400).json({
                error: error,
            });
        })

};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /allCheckIn
 */
export const allCheckIn = (req, res) => {
    CheckInModel.find()
    .then((response ) => {
        if(response.length > 0){
            return res.status(200).json({
                message: "Atlas CheckIn details fetch successfully!!",
                data: response
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas CheckIn details not found!!"
            });
        }
    })
    .catch((error) => {
        return res.status(400).json({
            error: error,
        });
    })
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: PUT
 * PATH: /updateCheckInById
 */
export const updateCheckInById = (req, res) => {
    const { id } = req.params;
    CheckInModel.findByIdAndUpdate(id, req.body, {new: true})
        .then((response) => {
            if(response) {
                return res.status(200).json({
                    messsage: "Atlas, CheckIn details updated successfully!!",
                    data: response
                });
            }
            else{
                return res.status(404).json({
                    message: 'Atlas, CheckIn details not found',
                    data: response
                })
            }
        })
        .catch((error) => {
            return res.status(400).json({
                error: error.message,
            });
        })
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: DELETE
 * PATH: /deleteCheckInById
 */
export const deleteCheckInById = (req, res) => {
    const { id } = req.params;
    CheckInModel.findByIdAndDelete(id)
        .then((response) => {
            if(response){
                return res.status(200).json({
                    message: "Atlas CheckIn deleted successfully!!",
                    data: response,
                });
            }
            else{
                return res.status(404).json({
                    message: "Atlas CheckIn not found",
                    data: response
                });
            }
        })
        .catch((error) => {
            return res.status(400).json({
                error: error.message,
            });
        })
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: DELETE
 * PATH: /findCheckInById
 */
export const findCheckInById = (req, res) => {
    const { id } = req.params;
    CheckInModel.findById(id)
        .then((response) => {
            if(response){
                return res.status(200).json({
                    message: "Atlas CheckIn deleted successfully!!",
                    data: response,
                });
            }
            else{
                return res.status(404).json({
                    message: "Atlas CheckIn not found",
                    data: response
                });
            }
        })
        .catch((error) => {
            return res.status(400).json({
                error: error.message,
            });
        })
};