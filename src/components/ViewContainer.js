import React from "react"
import { View, Dimensions } from "react-native"

const screen = Dimensions.get("screen")

export const ViewContainer = ({ style, ...rest }) => (
  <View
    style={{
      flex: 1,
      paddingHorizontal: 26,
      paddingTop: 0.15 * screen.height,
    }}
    {...rest}
  />
)
