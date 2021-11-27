import { useEffect, useState, useContext } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { GlobalDispatchContext } from "../context"

export function useStorageOnOpen() {
  const dispatch = useContext(GlobalDispatchContext)
  const [isStorageLoading, setIsStorageLoading] = useState()
  useEffect(() => {
    ;(async () => {
      setIsStorageLoading(true)
      let jsonValue = await AsyncStorage.getItem("@favorite_activities")
      if (jsonValue !== null) {
        dispatch({ type: "setFavoriteActivities", data: JSON.parse(jsonValue) })
      }
      jsonValue = await AsyncStorage.getItem("@filter_params")
      if (jsonValue !== null) {
        dispatch({ type: "setFilterParams", data: JSON.parse(jsonValue) })
      }
      setIsStorageLoading(false)
    })()
  }, [])

  return { isStorageLoading }
}
