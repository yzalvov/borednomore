import React from "react"
import { TouchableOpacity } from "react-native"

export const HeaderButton = ({ style, ...rest }) => (
  <TouchableOpacity
    style={{ paddingHorizontal: 24, ...style }}
    activeOpacity={0.5}
    {...rest}
  />
)
