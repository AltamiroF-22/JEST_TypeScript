import { Messaging } from "./messaging";

const createSut = () => {
  return new Messaging();
};

describe("Messaging", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return undefined.", () => {
    // System under test
    const sut = createSut();
    expect(sut.sendMessage('messaging')).toBeUndefined();
  });

  it("should call console.log once.", () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");
    sut.sendMessage('messaging');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("should call console.log with (Message sent: messaging) ", () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");
    sut.sendMessage('messaging');
    expect(consoleSpy).toHaveBeenCalledWith("Message sent: messaging");
  });
});

