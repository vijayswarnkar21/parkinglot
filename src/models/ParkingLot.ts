import { BaseModel } from "./BaseModel";
import { Floor } from "./Floor";
import { Gate } from "./Gate";

//TODO: Here to generate getter and setters 
// there should be a decorator like we have in JAVA
export class ParkingLot extends BaseModel {
    private _name: String;
    private _floors: Floor[];
    private _gates: Gate[];
    
    constructor(name: String, floors: Floor[], gates: Gate[]) {
        super();
        this._name = name
        this._floors = floors
        this._gates = gates
    }

    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }
    public get floors(): Floor[] {
        return this._floors;
    }
    public set floors(value: Floor[]) {
        this._floors = value;
    }
    public get gates(): Gate[] {
        return this._gates;
    }
    public set gates(value: Gate[]) {
        this._gates = value;
    }
}