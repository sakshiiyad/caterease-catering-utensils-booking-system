import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/publicRoutes/authRoutes.js'
import userRoutes from './src/routes/privateRoutes/userRoutes.js'

dotenv.config();


const app = express();
app.use(express.json());
app.use(cors())
connectDB();

// Public routes
app.use('/auth', authRoutes)

// Private/Protected routes
app.use('/', userRoutes)

const PORT=process.env.PORT||5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});