import { Attendent } from "./Attendent";
import { BaseModel } from "./BaseModel";

export class Gate extends BaseModel {
    private _attendent: Attendent;

    constructor(attendent: Attendent) {
        super()
        this._attendent = attendent
    }
    
    public get attendent(): Attendent {
        return this._attendent;
    }
    public set attendent(value: Attendent) {
        this._attendent = value;
    }
}