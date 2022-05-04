
import { DataSource} from 'typeorm'


export const AppDataSource : DataSource = new DataSource({
    type : 'mysql',
    host : 'localhost',
    port : 3306,
    username : 'mysqlroot',
    password : 'huylgvgsholding2001',
    database : 'legiahuy-express',
    synchronize : true,
    insecureAuth : true,
    entities : []
})

const connectDB = async () => {
    return await AppDataSource.initialize()
}

export default connectDB