import { BaseModel } from "./BaseModel";
import { Slot } from "./Slot";

export class Floor extends BaseModel {
    private _slots: Slot[];
    
    constructor(slots: Slot[]) {
        super()
        this._slots = slots
    }
    public get slots(): Slot[] {
        return this._slots;
    }
    public set slots(value: Slot[]) {
        this._slots = value;
    }
}