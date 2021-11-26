import { useEffect, useContext } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { GlobalStateContext } from "../context"

export function useStorageSyncUp() {
  const { filterParams, favoriteActivities } = useContext(GlobalStateContext)
  useEffect(() => {
    ;(async () => {
      const filterParamsJson = JSON.stringify(filterParams)
      const favoriteActivitiesJson = JSON.stringify(favoriteActivities)
      await AsyncStorage.setItem("@favorite_activities", favoriteActivitiesJson)
      await AsyncStorage.setItem("@filter_params", filterParamsJson)
    })()
  }, [filterParams, favoriteActivities])
}
