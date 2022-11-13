export class CreateParkingLotReqDto {
    private _name: String;
    private _numberOfFloors: Number;
    private _numberOfGates: Number;

    constructor(name: String, numberOfFloors: Number, numberOfGates: Number) {
        this._name = name
        this._numberOfFloors = numberOfFloors
        this._numberOfGates = numberOfGates
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

}