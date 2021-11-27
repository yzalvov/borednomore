import React from "react"
import { TouchableOpacity } from "react-native"
import { LargeText } from "./LargeText"

export const Button = ({ title, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    style={{
      backgroundColor: "black",
      alignItems: "center",
      paddingVertical: 10,
      borderRadius: 11,
    }}>
    <LargeText style={{ color: "white", fontSize: 20 }}>{title}</LargeText>
  </TouchableOpacity>
)
