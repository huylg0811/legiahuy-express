
import {BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm'

@Entity('city')
export class City extends BaseEntity {
    @PrimaryGeneratedColumn()
    id : string

    @Column()
    name : string

    @Column({
        type : 'float'
    })
    population : number

    
}