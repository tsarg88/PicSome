import Image from "./Image";
jest.mock("./Image");

describe("Test Heart icon", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();

    // const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    // button.find('button').simulate('click');
    // expect(Image.heartIcon().mock.calls).toEqual("ri-heart-fill favorite");
    Image.heartIcon.mockCallBack.toEqual("ri-heart-fill favorite");
  });
});

// describe("Sanity Tests", () => {
//   it("should check if empty {}", () => {
//     expect({}).toEqual({});
//   });
//   it("should for different value", () => {
//     expect(false).not.toBe(true);
//   });
// });
