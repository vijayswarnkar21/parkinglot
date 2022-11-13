import { Payment } from "./Payment";
import { Ticket } from "./Ticket";

export class Invoice {
    amount: Number;
    basePrice: Number;
    timeDuration: Number;
    ticket: Ticket;
    payment: Payment
}