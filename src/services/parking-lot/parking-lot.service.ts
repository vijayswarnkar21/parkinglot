import { Injectable } from '@nestjs/common';
import { ParkingLot } from 'src/models/ParkingLot';

@Injectable()
export class ParkingLotService {
    async createParkingLot(parkingLot : ParkingLot): Promise<ParkingLot>{
        save()
    }
}
