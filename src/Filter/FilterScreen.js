import React, { useState, useContext } from "react"
import { View, Dimensions, Button as RNButton } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { Button, LargeText } from "../components"
import { GlobalDispatchContext, GlobalStateContext } from "../context"
import { TYPES } from "./activity_types.const"

const screen = Dimensions.get("screen")

export const FilterScreen = ({ navigation }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const { filterParams } = useContext(GlobalStateContext)
  const [selectedType, setSelectedType] = useState(filterParams.type)

  function applyFilter() {
    dispatch({ type: "setFilterParams", data: { type: selectedType } })
    navigation.goBack()
  }

  function resetFilter() {
    dispatch({ type: "resetFilterParams" })
    navigation.goBack()
  }

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 0.15 * screen.height,
        paddingHorizontal: 28,
      }}>
      <LargeText
        style={{
          fontSize: 30,
          fontWeight: "700",
        }}>{`Filter\nby activity type`}</LargeText>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: -9,
        }}>
        <Picker
          selectedValue={selectedType}
          onValueChange={itemValue => setSelectedType(itemValue)}>
          {TYPES.map(item => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      </View>
      <View style={{ marginTop: 40, marginBottom: 20 }}>
        <Button title='Apply' onPress={applyFilter} />
      </View>
      <RNButton title='Reset filter' color='black' onPress={resetFilter} />
    </View>
  )
}
