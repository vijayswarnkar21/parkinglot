import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingLotController } from './controllers/parking-lot.controller';
import { ParkingLotService } from './services/parking-lot/parking-lot.service';

@Module({
  imports: [],
  controllers: [AppController,ParkingLotController],
  providers: [AppService,ParkingLotService],
})
export class AppModule {}
