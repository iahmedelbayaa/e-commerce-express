import express from 'express';
import router from './router';
import sequelize from './utils/sequlize.config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT ?? 3000;

app.use('/api', router);

sequelize.sync({ force: true }).then(() => {
    console.log('Database synced');
});

sequelize.authenticate().then(() => {
    console.log('Database connected');
}
).catch((err) => {
    console.log('Database connection failed', err);
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});