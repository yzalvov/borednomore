import React from "react"
import { View } from "react-native"

export const CenteredContentContainer = ({ style, ...rest }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      ...style,
    }}
    {...rest}
  />
)
