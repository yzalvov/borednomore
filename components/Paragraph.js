import React from "react"
import { View } from "react-native"

export const Paragraph = ({ style, ...rest }) => (
  <View style={{ paddingBottom: 18, ...style }} {...rest} />
)
