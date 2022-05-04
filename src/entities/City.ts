
import {BaseEntity, Column, Entity} from 'typeorm'

@Entity('city')
export class City extends BaseEntity {
    @Column({
        type : 'uuid'
    })
    id : string,
    
}