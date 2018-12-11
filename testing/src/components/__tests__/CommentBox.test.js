import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import Root from "../../Root";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});
afterEach(() => {
  wrapper.unmount();
});

it("has textarea and two buttons", () => {
  console.log(wrapper.find("textarea"));
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(2);
});

describe("change textarea and submit", () => {
  beforeEach(() => {
    wrapper
      .find("textarea")
      .simulate("change", { target: { value: "new comment" } });
    wrapper.update();
  });

  it("has a textarea that users can type in", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });
  it("has a form submitted ", () => {
    wrapper.find("form").simulate("submit");
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
