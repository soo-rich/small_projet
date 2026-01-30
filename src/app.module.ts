import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { KitsModule } from './kits/kits.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'api_crud',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 10,
        },
      ],
    }),
    KitsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
