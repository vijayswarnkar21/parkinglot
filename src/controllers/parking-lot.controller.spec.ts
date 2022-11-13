import { Test, TestingModule } from '@nestjs/testing';
import { ParkingLotController } from './parking-lot.controller';

describe('ParkingLotController', () => {
  let controller: ParkingLotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkingLotController],
    }).compile();

    controller = module.get<ParkingLotController>(ParkingLotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
