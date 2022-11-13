import { BaseModel } from "./BaseModel";
import { Payment } from "./Payment";
import { Ticket } from "./Ticket";

export class Invoice extends BaseModel {
    private _amount: Number;
    private _basePrice: Number;
    private _timeDuration: Number;
    private _ticket: Ticket;
    private _payment: Payment;

    constructor(
        amount: Number,
        basePrice: Number,
        timeDuration: Number,
        ticket: Ticket,
        payment: Payment
    ) {
        super()
        this._amount = amount
        this._basePrice = basePrice
        this._timeDuration = timeDuration
        this._ticket = ticket
        this._payment = payment
    }

    public get amount(): Number {
        return this._amount;
    }
    public set amount(value: Number) {
        this._amount = value;
    }
    public get basePrice(): Number {
        return this._basePrice;
    }
    public set basePrice(value: Number) {
        this._basePrice = value;
    }
    public get timeDuration(): Number {
        return this._timeDuration;
    }
    public set timeDuration(value: Number) {
        this._timeDuration = value;
    }
    public get ticket(): Ticket {
        return this._ticket;
    }
    public set ticket(value: Ticket) {
        this._ticket = value;
    }
    public get payment(): Payment {
        return this._payment;
    }
    public set payment(value: Payment) {
        this._payment = value;
    }
}