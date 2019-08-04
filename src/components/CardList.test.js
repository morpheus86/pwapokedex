import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("render CardList component", () => {
  const mockPoke = [
    {
      id: 1,
      name: "bulb",
      idx: 1
    }
  ];
  expect(shallow(<CardList pokemons={mockPoke} />)).toMatchSnapshot();
});
