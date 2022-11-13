import { AttendentType } from "./AttendentType";
import { BaseModel } from "./BaseModel";

export class Attendent extends BaseModel {
    private _name: String;
    private _type: AttendentType;

    constructor(name: String, type: AttendentType) {
        super()
        this._name = name
        this._type = type
    } 
    
    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }
    public get type(): AttendentType {
        return this._type;
    }
    public set type(value: AttendentType) {
        this._type = value;
    }


}