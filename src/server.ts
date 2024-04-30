import express from 'express';
import { myDataSource } from './utils/db.config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT ?? 3000;


myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});