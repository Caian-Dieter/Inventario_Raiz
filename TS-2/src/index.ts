import {connectDatabase} from "./databaseConnection";

const starApplicacao = async () => {
    await connectDatabase();
    console.log("Sistema de Gerenciamento de inventario da Raiz Natural inicializado")
}

starApplicacao();