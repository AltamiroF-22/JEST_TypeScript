describe("Primitive values", () => {
  it("Should test jest assertions", () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeFalsy();

    expect(number).toBeLessThan(20);

    expect(number).toBeCloseTo(10.004);
    expect(number).toBeCloseTo(9.996);
  });
});

describe("Objects", () => {
  it("Should test jest assertions with objects", () => {
    const person = { name: "Altamiro", age: 22 };
    const AnotherPerson = { ...person };

    expect(person).toEqual(AnotherPerson);
    expect(person).toHaveProperty("age", 22);
  });
});
