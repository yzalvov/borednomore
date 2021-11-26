import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

function filterParamsReducer(state, action) {
  switch (action.type) {
    case "setFilterParams":
      return { ...state, ...action.data }
    case "resetFilterParams":
      return {}
    default:
      return state
  }
}

function favoriteActivitiesReducer(state, action) {
  switch (action.type) {
    case "setFavoriteActivities":
      return { ...state, ...action.data }
    case "removeFavoriteActivity":
      const { [action.data]: item, ...rest } = state
      return rest
    default:
      return state
  }
}

function timestampTriggerReducer(state, action) {
  switch (action.type) {
    case "setTimestampTrigger":
      return action.data
    default:
      return state
  }
}

function mainReducer(
  { filterParams, favoriteActivities, timestampTrigger },
  action
) {
  return {
    favoriteActivities: favoriteActivitiesReducer(favoriteActivities, action),
    filterParams: filterParamsReducer(filterParams, action),
    timestampTrigger: timestampTriggerReducer(timestampTrigger, action),
  }
}

const initialState = {
  favoriteActivities: [],
  filterParams: {},
  timestampTrigger: Date.now(),
}

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
