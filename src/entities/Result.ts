import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { IsString, IsDate, IsBoolean } from "class-validator";

@Entity()
export class Result extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  api_key: string;

  @Column()
  @IsDate()
  created_at: Date;

  @Column()
  @IsString()
  project: string;

  @Column()
  @IsBoolean()
  error: boolean;

  @Column()
  @IsString()
  message: string;
}
