import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import UserGallery from "./UserGallery";

const Stack = createNativeStackNavigator();

export default function ProfileStack({ user }: { user: any }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" options={{ title: "Your Profile" }}>
        {(props) => <Profile {...props} user={user} />}
      </Stack.Screen>
      <Stack.Screen name="Your Gallery" component={UserGallery} />
    </Stack.Navigator>
  );
}
