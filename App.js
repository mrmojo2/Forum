import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import expressAsyncErrors from 'express-async-errors'
import cookieParser from 'cookie-parser'
import moran from 'morgan'

import connectDB from './db/connect.js'

import notFoundMiddleware from './middlewares/notFound.js'
import errorHandlerMiddleware from './middlewares/errorHandler.js'
import { authenticateUser, authorizePermissions } from "./middlewares/atuh.js";


import userRouter from './routes/userRoutes.js'
import authRouter from './routes/authRoutes.js'
import postRouter from './routes/postRoutes.js'


app.use(moran('dev'))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))


app.use('/api/v1/auth', authRouter)
app.use('/api/v1/posts', postRouter)
app.use('/api/v1/users', userRouter)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`bababoye server listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()