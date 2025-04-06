import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import routerRegister from './route/register.js';

// -------------
dotenv.config();
const app = express();

// It allow React to call Node APIs.
app.use(cors());

// To Properly parse Json Data from Frontend
app.use(express.json());

// Connection to Database
connectDB();

// Routes
app.use('/api/auth', routerRegister);

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on this port 5000');
})