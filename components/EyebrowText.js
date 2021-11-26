import React from "react"
import { Text } from "react-native"

export const EyebrowText = ({ style, ...rest }) => (
  <Text
    style={{ fontSize: 16, fontWeight: "700", color: "gray", ...style }}
    {...rest}
  />
)
