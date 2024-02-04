import "dotenv/config";
import cors from 'cors';
import express from 'express';
import app from './src/app.js'; 

const PORT = 4000;

const corsOptions = {
    origin: '*', 
    credentials: true,           
    optionSuccessStatus: 200
};

const server = express();

server.use(cors(corsOptions));

server.use(express.json());  

server.use(app);

server.listen(PORT, () => {
    console.log('Servidor escutando na porta', PORT);
});
