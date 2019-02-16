import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  apiKey: string;

  @Column()
  time: Date;

  @Column()
  project: string;

  @Column()
  error: boolean;

  @Column()
  message: string;
}
