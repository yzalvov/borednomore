import React, { useContext } from "react"
import { ScrollView, SafeAreaView } from "react-native"
import { GlobalDispatchContext, GlobalStateContext } from "../context"
import { FavoriteItem } from "./FavoriteItem"

export const FavoritesTab = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const { favoriteActivities } = useContext(GlobalStateContext)
  const entries = Object.entries(favoriteActivities)

  function removeFromFavorites(key) {
    dispatch({ type: "removeFavoriteActivity", data: key })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ paddingTop: 30 }}>
        {!entries.length
          ? null
          : entries.map(([key, value]) => {
              return (
                <FavoriteItem
                  key={key}
                  {...value}
                  handleRemove={() => removeFromFavorites(key)}
                />
              )
            })}
      </ScrollView>
    </SafeAreaView>
  )
}
