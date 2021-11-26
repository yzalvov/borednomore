import React from "react"
import { HeaderButton } from "./HeaderButton"
import { HeaderButtonIcon } from "./HeaderButtonIcon"

export const ShuffleHeaderButton = ({ onPress }) => {
  return (
    <HeaderButton {...{ onPress }}>
      <HeaderButtonIcon name='shuffle-outline' />
    </HeaderButton>
  )
}
