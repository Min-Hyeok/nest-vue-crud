import { createConnection } from 'typeorm';

export const databaseaProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'ec2-52-87-107-83.compute-1.amazonaws.com',
            port: 5432,
            username: 'xmxmphxbhkuzbr',
            password: '01b1b3ae06491502d486ce81c4963fafbbb0593c053c951941cb87d0f0ee19a3',
            database: 'dfa36ucofbor0a',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
            extra: {
                ssl: {
                    rejectUnauthorized: false
                }
            },
        }),
    },
]