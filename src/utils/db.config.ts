import dotenv from 'dotenv'
import { Dialect } from 'sequelize';


dotenv.config();

const dbConfig = {
  host: process.env.POSTGRES_HOST ?? 'localhost',
  user: process.env.POSTGRES_USER!,
  password: process.env.POSTGRES_PASSWORD!,
  db: process.env.POSTGRES_DB!,
  dialect: (process.env.DIALECT ?? 'postgres') as Dialect,
  query: { raw: true, plain: false, nest: true },
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
};

export default dbConfig;