// aqui vamos utilizar o ORM para relacionar o type com o banco de dados

//aqui importamos métodos e  
import { Entity, PrimaryGeneratedColumn , Column , OneToMany } from "typeorm";
import { Produto } from "./Produto";

@Entity()
export class Categoria {
    //criaçao de uma PK com ORM 
    @PrimaryGeneratedColumn()
    id: number;

    //coluna normal no ORM
    @Column() 
    nome: string;

    //coluna normal no ORM
    //propriedade descriçao é marcada como uma coluna na tabela do DB
    @Column()
    descricao: string;

    //Coluna que define o tipo de dado armazenado como timestamp no DB
    //default: () define o valor padrao armazenado nessa propriedade com a data e hora atual
        
    //propriedade data e hora é do tipo Date em TS , o que corresponde ao tipo timestamp
    //no DB , assim o valor guardado tambem sera data/hora no TS.
    @Column({type : "timestamp" , default: () => "CURRENT_TIMESTAMP"})
    dataCriacao: Date;

    //criaçao de uma relaçao entre entidades de 1 para muitos(FK).
    //nesse caso categoria esta do lado de "um" da relaçao
    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos:Produto[];

}
