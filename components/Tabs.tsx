import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./MainScreen";
import FindRide from "./FindRide";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

export default function Tabs({ user }: { user: any }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
        children={() => <MainScreen user={user} />}
      />
      <Tab.Screen name="Profile" options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person-circle-sharp" : "person-circle-outline"}
              color={color}
              size={24}
            />
          ),
        }} children={() => <ProfileStack user={user} />} />
      <Tab.Screen name="Find Ride" options={{
          title: "Find Ride",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search-sharp" : "search-outline"}
              color={color}
              size={24}
            />
          ),
        }} children={() => <FindRide user={user} />} />
    </Tab.Navigator>
  );
}
