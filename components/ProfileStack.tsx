import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import UserGallery from "./UserGallery";
import EditUser from "./EditProfile";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Profile} options={{ title: "Your Profile" }} />
      <Stack.Screen name="Your Gallery" component={UserGallery} />
      <Stack.Screen name="Edit Profile" component={EditUser} />
    </Stack.Navigator>
  );
}
