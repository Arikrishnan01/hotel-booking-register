import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import { connectDB } from "./Config/db.js";
import bodyParser from "body-parser";
import checkInRouter from "./Routes/CheckInRoutes.js";
import checkOutRouter from './Routes/CheckOutRoutes.js';

const app = express();

/**CONFIGURE THE DOTENV VARIABLE */
dotenv.config();
const PORT = process.env.PORT;

/**MONGODB CONNECTED */
connectDB();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

/**
 * CONFIGURE THE CORS
 */
app.use(cors());

/** API ENDPOINT HOME PAGE */
app.get('/', (req, res) => {
        res.status(200).json({
            message: "API RUNNING SUCCESSFULLY!!!"
    });
})

/** APP USE THE ALL MAIN ROUTES */
app.use('/checkIn', checkInRouter);
app.use('/checkOut', checkOutRouter);

/**APP LISTEN THE SERVER WITH PORT NUMBER */
app.listen(PORT,() => {
    console.log(`SERVER STARTED : ${PORT}`.bold.yellow);
});