import {
  CustomerOderProps,
  EnterpriseCustomerProps,
  IndividualCustomerProps,
} from "./interface/customer";

export class IndividualCustomer
  implements IndividualCustomerProps, CustomerOderProps
{
  constructor(
    public name: string,
    public lastname: string,
    public cpf: string,
    public age: number
  ) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.cpf = cpf;
  }

  getName(): string {
    return `${this.name} ${this.lastname}`;
  }
  
  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProps, CustomerOderProps
{
  constructor(public name: string, public cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
