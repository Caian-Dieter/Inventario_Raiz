import "reflect-metadata";
import { DataSource } from "typeorm";
import { Categoria } from "./entities/Categoria";
import { Produto } from "./entities/Produto";
import dotenv from "dotenv";

// Carregar variáveis do arquivo info.env
dotenv.config({ path: "info.env" });

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  entities: [Categoria, Produto],
  synchronize: true,
});

export const connectDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Banco de dados conectado!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados", error);
  }
};
