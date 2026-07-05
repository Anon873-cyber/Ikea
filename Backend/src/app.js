import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// importing routes
import userRoute from "./router/user.router.js"
import productRoute from './router/product.router.js'
import reviewRoute from './router/review.router.js'

app.use("/api/v1/user/", userRoute)
app.use("/api/v1/",productRoute)
app.use("/api/v1/",reviewRoute)

export {app}

