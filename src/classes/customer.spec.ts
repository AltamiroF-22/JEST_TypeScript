import { IndividualCustomer, EnterpriseCustomer } from "./customerClass";

const createIndiviualCustomer = (
  name: string,
  lastname: string,
  cpf: string,
  age: number
): IndividualCustomer => {
  return new IndividualCustomer(name, lastname, cpf, age);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => {
  jest.clearAllMocks();
});

describe("IndividualCustomer", () => {
  it("should have (name, lastname, cpf, age)", () => {
    const sut = createIndiviualCustomer(
      "Altamiro",
      "Júnior",
      "123.456.789-00",
      22
    );

    expect(sut).toHaveProperty("name", "Altamiro");
    expect(sut).toHaveProperty("lastname", "Júnior");
    expect(sut).toHaveProperty("cpf", "123.456.789-00");
    expect(sut).toHaveProperty("age", 22);
  });

  it("should have methods to get name and IDN for individual customer", () => {
    const sut = createIndiviualCustomer(
      "Altamiro",
      "Júnior",
      "123.456.789-00",
      22
    );

    expect(sut.getName()).toBe("Altamiro Júnior");
    expect(sut.getIDN()).toBe("123.456.789-00");
  });
});

describe("EnterpriseCustomer", () => {
  it("should have (name, cnpj)", () => {
    const sut = createEnterpriseCustomer("Altamiro", "74.154.317/0001-19");

    expect(sut).toHaveProperty("name", "Altamiro");
    expect(sut).toHaveProperty("cnpj", "74.154.317/0001-19");

  });

  it("should have methods to get name and IDN for Enterprise", () => {
    const sut = createEnterpriseCustomer("Altamiro", "74.154.317/0001-19");

    expect(sut.getName()).toBe("Altamiro");
    expect(sut.getIDN()).toBe("74.154.317/0001-19");
  });
});
