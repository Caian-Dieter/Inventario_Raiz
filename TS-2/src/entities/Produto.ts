//importando modulos ,classes e operators para construir uma entidade

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, UpdateDateColumn } from "typeorm";
import { Categoria } from "./Categoria";

@Entity()
export class Produto {

  //Decorator PrimaryGeneratedColumn gera uma PK 
  //do tipo number no TS  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  descricao: string;

  //decorator que mapeia a propriedade preco do tipo number(em TS)
  //como uma coluna da entidade produto que tem o tipo decimal no DB  
  @Column({"decimal",precision: 10,scale:2})
  preco: number;

  @Column("int")
  quantidade: number;

  //FK ocupa o estado "muitos" da relaçao
  @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
  categoria: Categoria;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  dataCriacao: Date;

  @UpdateDateColumn({type: "timestamp"})
  dataAtualizacao: Date;
}
