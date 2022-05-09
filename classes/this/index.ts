class Payment {
  private date: Date = new Date();
  getDate(this: Payment) {
    return this.date;
  }
  getDateArr = () => {
    return this.date;
  };
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
    return super.getDateArr();
  }
}

console.log(new PaymentPersistent().save());
