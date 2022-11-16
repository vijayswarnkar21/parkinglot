import { Controller, Get, Post } from '@nestjs/common';
import { CreateParkingLotReqDto } from 'src/dtos/request/CreateParkingLot';
import { ParkingLot } from 'src/models/ParkingLot';
import { ParkingLotService } from 'src/services/parking-lot/parking-lot.service';

@Controller('parking-lot')
export class ParkingLotController {

    constructor(private parkingLotService: ParkingLotService){} 

    @Post()
    async create(createParkingLotReqDto: CreateParkingLotReqDto) : Promise<ParkingLot>{
        //1. validate createParkingLotReqDto
        //2. create corresponding model rom req Dto
        return this.parkingLotService.createParkingLot(createParkingLotReqDto.toParkingLot())
    }

    @Get()
    getAll(){
        return "Hi"
    }
}
