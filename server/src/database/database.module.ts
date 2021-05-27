import { Module } from '@nestjs/common';
import { databaseaProviders } from './database.providers';

@Module({
    providers: [...databaseaProviders],
    exports: [...databaseaProviders],
})
export class DatabaseModule {}