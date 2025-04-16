import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./SignIn";
import Auth from "./Auth";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Auth} options={{ title: "Sign Up" }} />
      <Stack.Screen name="Sign In" component={SignIn} />
    </Stack.Navigator>
  );
}
