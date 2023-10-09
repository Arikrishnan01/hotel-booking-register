import CheckOutModel  from '../Models/CheckOutModel.js';

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: POST
 * PATH: /checkIn
 */
export const createCheckOut = (req, res)=>{
    const {
        registerNo = 0,
        name = "",
        date = "",
        time = "",
        roomNo = 0,
        billAmount = 0
    } = req.body;

    const CheckOut = new CheckOutModel({
        registerNo ,
        name ,
        date ,
        time ,
        roomNo ,
        billAmount
    })
    CheckOut.save()
        .then((response) => {
            if(response._id){
                return res.status(200).json({
                    message: "CheckOut details created successfully",
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
 * PATH: /allCheckOut
 */
export const allCheckOut = (req, res) => {
    CheckOutModel.find()
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
export const updateCheckOutById = (req, res) => {
    const { id } = req.params;
    CheckOutModel.findByIdAndUpdate(id, req.body, {new: true})
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
 * PATH: /deleteCheckOutById
 */
export const deleteCheckOutById = (req, res) => {
    const { id } = req.params;
    CheckOutModel.findByIdAndDelete(id)
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

export const findCheckOutById = (req, res) => {
    const { id } = req.params;
    CheckOutModel.findById(id)
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