interface PaymentPersistent {
  id: number,
  sum: number,
  from: string,
  to: string
}

type Payment = Omit<PaymentPersistent, 'id'>;
type Requisite = Pick<PaymentPersistent, 'from' | 'to'>;

type ExtractString = Extract< 5 |'from' | 'to' | Payment, string>; //extracts all string types from the union
type ExcludeString = Exclude< 5 |'from' | 'to' | Payment, string>; //extracts all types except string

