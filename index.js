
//imports
// API DOcumenATion
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "swagger-jsdoc";
//const express = require('express');
//packages import
import express from 'express';
import "express-async-errors";
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';

//security packages
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
//files import
import connectDB from './config/db.js';

//import routes
import testRoutes from './routes/testRoutes.js'
import authRoutes from './routes/authRoutes.js'
import errorMiddleware from './middlewars/errorMiddleware.js';
import userRoutes from'./routes/userRoutes.js'
import jobRoutes from './routes/jobsRoute.js'

//dot env config
dotenv.config();

//mongodb connection
connectDB();

//swagger api config
const options = {
    definition:{
    openapi: "3.0.3",
    info: {
        title: "Job Portal Application",
        description: "Node Expressjs Job Portal Application",
    },
    servers:[
        {
            url: 'http://localhost:8080'
        }
    ]
   },
    apis:['./routes/*.js',]
};
const spec = swaggerDoc(options);

//rest obj
const app = express();

//middlewars
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//homeroute
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec));

//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobRoutes);

//vALIDATION MIDDLEWARE
app.use(errorMiddleware);

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () =>{
    console.log(`Running node server in ${process.env.DEV_MODE} mode on port no ${PORT}`
        .bgYellow.white);
});

