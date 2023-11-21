import express from 'express';
import bodyParser from 'body-parser';
import carsRoutes from './routes/cars.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/cars', carsRoutes);

app.get('/', (req,res) =>  res.send('Hello from Homepage'));


app.listen(PORT, () => console.log(`Server running on port : http://localhost:${PORT}`));