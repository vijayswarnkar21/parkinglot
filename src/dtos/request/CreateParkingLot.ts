import { Floor } from "src/models/Floor";
import { Gate } from "src/models/Gate";
import { ParkingLot } from "src/models/ParkingLot";
import { Slot } from "src/models/Slot";
import { SlotStatus } from "src/models/SlotStatus";
import { SlotType } from "src/models/SlotType";

export class CreateParkingLotReqDto {
    private _name: String;
    private _numberOfFloors: Number;
    private _numberOfGates: Number;
    private _numberOfSlotsPerfloor: Number;

    constructor(name: String, numberOfFloors: Number, numberOfGates: Number,numberOfSlotsPerfloor: Number) {
        this._name = name
        this._numberOfFloors = numberOfFloors
        this._numberOfGates = numberOfGates
        this._numberOfSlotsPerfloor = numberOfSlotsPerfloor
    }
    
    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }
    public get numberOfFloors(): Number {
        return this._numberOfFloors;
    }
    public set numberOfFloors(value: Number) {
        this._numberOfFloors = value;
    }
    public get numberOfGates(): Number {
        return this._numberOfGates;
    }
    public set numberOfGates(value: Number) {
        this._numberOfGates = value;
    }

    public get numberOfSlotsPerfloor(): Number {
        return this._numberOfSlotsPerfloor;
    }
    public set numberOfSlotsPerfloor(value: Number) {
        this._numberOfSlotsPerfloor = value;
    }

    toParkingLot() : ParkingLot {
        let floors: Floor[] = []
        let slots: Slot[] = []
        let gates: Gate[] = []
        for(let i=1;i<=this._numberOfSlotsPerfloor;i++){
            let slot = new Slot(SlotType.LARGE, SlotStatus.FREE)
            slots.push(slot)
        }
        for(let i=1;i<=this._numberOfFloors;i++){
            let floor = new Floor(slots)
            floors.push(floor)
        }

        for(let i=1;i<=this._numberOfGates;i++){
            let gate = new Gate(null)
            gates.push(gate)
        }

        let parkingLot: ParkingLot = new ParkingLot("ShandiDoot",floors,gates)
        return parkingLot
    }

}