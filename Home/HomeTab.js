import React, { useContext } from "react"
import { View, Text, ActivityIndicator } from "react-native"
import { useBoredApiFetchFacade } from "./useBoredApiFetchFacade"
import { useStorageOnOpen, useStorageSyncUp } from "../storage"
import { Activity } from "./Activity"
import { CenteredContentContainer } from "../components"
import { GlobalStateContext, GlobalDispatchContext } from "../context"

export const HomeTab = () => {
  const { isStorageLoading } = useStorageOnOpen()
  useStorageSyncUp()
  const { timestampTrigger, favoriteActivities, filterParams } =
    useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const { isLoading, activity } = useBoredApiFetchFacade({
    timestampTrigger,
    filterParams,
  })
  const isFavorite = Boolean(activity && favoriteActivities[activity.key])

  function addToFavorites() {
    const { key, ...rest } = activity
    dispatch({ type: "setFavoriteActivities", data: { [key]: rest } })
  }

  function removeFromFavorites() {
    dispatch({ type: "removeFavoriteActivity", data: activity.key })
  }

  return (
    <View style={{ flex: 1 }}>
      {isStorageLoading || isLoading ? (
        <CenteredContentContainer>
          <ActivityIndicator size='large' />
        </CenteredContentContainer>
      ) : activity ? (
        <Activity
          item={activity}
          {...{ isFavorite, addToFavorites, removeFromFavorites }}
        />
      ) : (
        <CenteredContentContainer>
          <Text>Something went wrong. </Text>
        </CenteredContentContainer>
      )}
    </View>
  )
}
