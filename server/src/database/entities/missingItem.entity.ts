import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

enum State {
    LOST = "lost",
    AVAILABLE = "available",
    FOUND = "found"
}

@Entity()
export class MissingItem {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column()
    name: string

    @Column()
    color!: string

    @Column({type:"enum", enum:State, default:State.LOST})
    status!: State

    @Column()
    description: string
    
   


}

    