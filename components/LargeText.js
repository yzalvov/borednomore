import React from "react"
import { Text } from "react-native"

const fontSize = 23

export const LargeText = ({ style, ...rest }) => (
  <Text
    style={{
      fontSize,
      fontWeight: "600",
      lineHeight: 1.4 * fontSize,
      ...style,
    }}
    {...rest}
  />
)
