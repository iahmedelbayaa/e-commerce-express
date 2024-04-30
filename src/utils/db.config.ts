import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    // username: "test",
    // password: "test",
    database: "e-commerce",
    entities: ["src/entity/*.js"],
    logging: true,
    synchronize: true,
})