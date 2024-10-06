import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';

dotenv.config({
    path: './.env'
});
connectDB().then(
    () => {
        const app = express();
        app.use(express.json());
        app.get('/', (req, res) => {
            res.send('API is running');
        });
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
    }
).catch(err => console.error(err));