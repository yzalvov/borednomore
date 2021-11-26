import React, { useContext } from "react"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { OnboardingScreen } from "./Onboarding"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import { HomeTab } from "./Home"
import { FavoritesTab } from "./Favorites"
import {
  ShuffleHeaderButton,
  FilterHeaderButton,
  GreenTopMark,
} from "./components"
import {
  GlobalContextProvider,
  GlobalDispatchContext,
  GlobalStateContext,
} from "./context"
import { FilterScreen } from "./Filter/FilterScreen"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Tabs = ({ navigation }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const { favoriteActivities, filterParams } = useContext(GlobalStateContext)
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name='Home'
        component={HomeTab}
        options={{
          tabBarLabel: "Activity",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='play' color={color} size={size} />
          ),
          headerLeft: () => (
            <ShuffleHeaderButton
              onPress={() =>
                dispatch({ type: "setTimestampTrigger", data: Date.now() })
              }
            />
          ),
          headerTransparent: true,
          title: "",
          headerRight: () => (
            <View>
              <FilterHeaderButton onPress={() => navigation.push("Filter")} />
              {!Object.keys(filterParams).length ? null : <GreenTopMark />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoritesTab}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='bookmarks' color={color} size={size} />
          ),
          tabBarBadge: Object.keys(favoriteActivities).length || undefined,
          tabBarBadgeStyle: {
            backgroundColor: "lightgreen",
            fontWeight: "500",
          },
          headerTransparent: true,
          title: "",
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "black",
            headerTransparent: true,
          }}>
          <Stack.Screen
            name='Onboarding'
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Filter'
            component={FilterScreen}
            options={{
              title: "",
            }}
          />
          <Stack.Screen
            name='Tabs'
            component={Tabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  )
}
