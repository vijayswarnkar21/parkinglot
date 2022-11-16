import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingLotController } from './controllers/parking-lot.controller';
import { ParkingLotService } from './services/parking-lot/parking-lot.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from "../src/config/ormConfig"
@Module({
  imports: [TypeOrmModule.forRoot(dbConfig)],
  controllers: [AppController, ParkingLotController],
  providers: [AppService, ParkingLotService],
})
export class AppModule { }
