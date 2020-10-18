const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const session = require('express-session')
const fileUpload = require('express-fileupload');

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

app.use(fileUpload())
app.use(express.json())
app.use(cors())
app.use(session({secret:"jkhfjdsgf51fgh1h15hr5fd1ghr", resave:false, saveUninitialized:true}))
app.use('/app', routesUrls)
app.listen(4000, () => console.log("server is up and runing"))