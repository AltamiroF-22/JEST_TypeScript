export interface CustomerOderProps {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProps {
  name: string;
  lastname: string;
  age: number;
  cpf: string;
}

export interface EnterpriseCustomerProps {
  name: string;
  cnpj: string;
}
