import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions'

export const dbConfig: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'db',
    entities: ['dis/scr/**/*.entity.js'],
    synchronize: true   
}