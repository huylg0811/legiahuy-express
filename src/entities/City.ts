
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'


@Entity()
export class City extends BaseEntity {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string

    @Column({
        type : 'float'
    })
    population : number

    
}