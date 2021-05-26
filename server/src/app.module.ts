import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
import { UserController } from './controller/user/user.controller';
import { UserService } from './controller/user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "ec2-52-87-107-83.compute-1.amazonaws.com",
      "port": 5432,
      "username": "xmxmphxbhkuzbr",
      "password": "01b1b3ae06491502d486ce81c4963fafbbb0593c053c951941cb87d0f0ee19a3",
      "database": "dfa36ucofbor0a",
      "extra": {
          "ssl": {
              "rejectUnauthorized": false
          }
      },
      "entities": [],
    })
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'static'),
    //   renderPath: join(__dirname, '..', 'static'),
    // })
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
