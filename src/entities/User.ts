import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { IsEmail, IsString } from "class-validator";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @IsString()
    hash: string;
  
    @Column()
    @IsString()
    api_key: string;
  }
