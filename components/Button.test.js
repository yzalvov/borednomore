import React from "react"
import renderer from "react-test-renderer"
import { Button } from "./Button"

it("Button renders correctly across screens", () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})
