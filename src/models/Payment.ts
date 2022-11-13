import { BaseModel } from "./BaseModel";
import { Invoice } from "./Invoice";
import { PaymentStatus } from "./PaymentStatus";

export class Payment extends BaseModel {
    private _amount: Number;
    private _status: PaymentStatus;
    private _invoice: Invoice;
    
    constructor(amount: Number, status: PaymentStatus, invoice: Invoice) {
        super()
        this._amount = amount
        this._status = status
        this._invoice = invoice
    }
    public get amount(): Number {
        return this._amount;
    }
    public set amount(value: Number) {
        this._amount = value;
    }
    public get status(): PaymentStatus {
        return this._status;
    }
    public set status(value: PaymentStatus) {
        this._status = value;
    }
    public get invoice(): Invoice {
        return this._invoice;
    }
    public set invoice(value: Invoice) {
        this._invoice = value;
    }
}