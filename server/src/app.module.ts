import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './service/user/user.module';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'static'),
    //   renderPath: join(__dirname, '..', 'static'),
    // })
    DatabaseModule,
    AuthModule,
    UserModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
