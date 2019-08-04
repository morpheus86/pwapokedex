import { shallow, mount, render } from "enzyme";
import React from "react";
import Card from "./Card";
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// configure({
//   adapter: new Adapter()
// });

it("render Card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
