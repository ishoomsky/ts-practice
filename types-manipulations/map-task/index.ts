interface IForm {
  name: string;
  password: string;
}

const form: IForm = {
  name: 'Вася',
  password: '123',
};

const formValidation: IValidation = {
  name: {
    isValid: true
  },
  password: {
    isValid: false,
    errorMessage: 'you shoud do...'
  }
}

type FormToValidation<Type> = {
  [Property in keyof Type]: {isValid: true} | {isValid: false, errorMessage: string}
}

type IValidation = FormToValidation<IForm>;
