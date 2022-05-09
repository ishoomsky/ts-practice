"use strict";
class Payment {
  constructor() {
    this.date = new Date();
    this.getDateArr = () => {
      return this.date;
    };
  }
  getDate() {
    return this.date;
  }
}
const p = new Payment();
// console.log(p.getDate());
const user = {
  id: 1,
  paymentDate: p.getDate.bind(p),
  paymentDateArr: p.getDateArr,
};
// console.log(user.paymentDate());
// console.log(user.paymentDateArr());
class PaymentPersistent extends Payment {
  save() {
    // problem of arrow method:
    return super.getDateArr();
    // use function method or add this instead of super this.getDateArr();
  }
}
console.log(new PaymentPersistent().save());
