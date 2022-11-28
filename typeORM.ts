import { DataSource } from "typeorm";
import "dotenv/config";

export const myDataSource = new DataSource({
  type: (process.env.typeORM_type as any) || "mysql",
  host: process.env.typeORM_host,
  port: (process.env.typeORM_port as any) || 3306,
  username: process.env.typeORM_username,
  password: process.env.typeORM_password,
  database: process.env.typeORM_database,
  logging: true,
});

myDataSource
  .initialize()
  .then(() => {
    console.log("database initialized");
  })
  .catch((err) => {
    console.log("databse init failed", err);
  });
