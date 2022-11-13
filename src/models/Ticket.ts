import { BaseModel } from "./BaseModel"
import { Vehicle } from "./Vehicle"

export class Ticket extends BaseModel {
    private _time: Date
    private _vehicle: Vehicle
    private _customerPhone: String

    constructor(time: Date, vehicle: Vehicle, customerPhone: String) {
        super()
        this._time = time
        this._vehicle = vehicle
        this._customerPhone = customerPhone
    }
    
    public get time(): Date {
        return this._time
    }
    public set time(value: Date) {
        this._time = value
    }
    public get vehicle(): Vehicle {
        return this._vehicle
    }
    public set vehicle(value: Vehicle) {
        this._vehicle = value
    }
    public get customerPhone(): String {
        return this._customerPhone
    }
    public set customerPhone(value: String) {
        this._customerPhone = value
    }
}