import { BaseModel } from "./BaseModel";
import { SlotStatus } from "./SlotStatus";
import { SlotType } from "./SlotType";

export class Slot extends BaseModel {
    private _type: SlotType;
    private _status: SlotStatus;
    constructor(type: SlotType, status: SlotStatus) {
        super()
        this._type = type
        this._status = status
    }
    public get type(): SlotType {
        return this._type;
    }
    public set type(value: SlotType) {
        this._type = value;
    }
    public get status(): SlotStatus {
        return this._status;
    }
    public set status(value: SlotStatus) {
        this._status = value;
    }
}