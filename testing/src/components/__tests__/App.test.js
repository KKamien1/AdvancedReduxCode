import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

let app;

beforeEach(() => {
  app = shallow(<App />);
});

it("shows a comment box", () => {
  expect(app.find(CommentBox).length).toBe(1);
});

it("shows a comment list", () => {
  expect(app.find(CommentList).length).toBe(1);
});
