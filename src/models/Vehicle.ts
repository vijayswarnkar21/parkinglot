import { BaseModel } from "./BaseModel";

export class Vehicle extends BaseModel {
    private _registrationNumber: String;
    
    constructor(registrationNumber: String) {
        super()
        this._registrationNumber = registrationNumber
    }
    public get registrationNumber(): String {
        return this._registrationNumber;
    }
    public set registrationNumber(value: String) {
        this._registrationNumber = value;
    }
}