import React from "react"
import { HeaderButton } from "./HeaderButton"
import { HeaderButtonIcon } from "./HeaderButtonIcon"

export const FilterHeaderButton = ({ onPress }) => {
  return (
    <HeaderButton {...{ onPress }}>
      <HeaderButtonIcon name='filter-outline' />
    </HeaderButton>
  )
}
