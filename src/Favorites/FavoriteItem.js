import React from "react"
import { View, TouchableOpacity } from "react-native"
import { LargeText } from "../components"
import Ionicons from "react-native-vector-icons/Ionicons"

export const FavoriteItem = ({ activity, handleRemove }) => {
  return (
    <View
      style={{
        marginHorizontal: 13,
        paddingLeft: 15,
        paddingRight: 10,
        marginVertical: 6,
        paddingVertical: 13,
        borderRadius: 12,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <View style={{ flex: 8 }}>
        <LargeText style={{ lineHeight: 30 }}>{activity}</LargeText>
      </View>
      <TouchableOpacity
        style={{ paddingLeft: 4 }}
        activeOpacity={0.5}
        onPress={handleRemove}>
        <Ionicons name='close-outline' size={32} />
      </TouchableOpacity>
    </View>
  )
}
