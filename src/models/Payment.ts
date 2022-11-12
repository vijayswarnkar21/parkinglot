import { Invoice } from "./Invoice";
import { PaymentStatus } from "./PaymentStatus";

export class Payment {
    amount: Number;
    status: PaymentStatus;
    invoice: Invoice
}