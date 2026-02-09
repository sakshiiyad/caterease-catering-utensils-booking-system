import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/publicRoutes/authRoutes.js'
import bookingRoute from './src/routes/privateRoutes/bookingRoutes.js'
import adminRoute from './src/routes/privateRoutes/adminRoute.js';

dotenv.config();


const app = express();
app.use(express.json());
app.use(cors())
connectDB();

// Public routes
app.use('/auth', authRoutes)

// Private/Protected routes
app.use('/api',bookingRoute)

//admin route inside private route
app.use('/api',adminRoute);



const PORT=process.env.PORT||5000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});