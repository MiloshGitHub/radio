import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import currentShowRoutes from './api/routes/currentShowRoutes.js';

dotenv.config(); 
const app = express(); 
app.use(cors()); 
app.use(express.json()); 

// Root endpoint
app.get('/', (req, res) => res.json({message: 'Radio backend running'}));

// API endpoints
app.use('/current-show', currentShowRoutes);

app.listen(5000, () => console.log('Backend API running on port 5000'));