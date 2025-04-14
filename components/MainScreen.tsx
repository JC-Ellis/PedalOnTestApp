import "react-native-url-polyfill/auto";
import React, { useContext } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { supabase } from "../lib/supabase";
import { UserContext } from "./UserContext";

export default function MainScreen() {
  const userInfo = useContext(UserContext);
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome,{" "}
        {userInfo?.user_metadata?.display_name || userInfo?.email || "Guest"}!
      </Text>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/05/08/10/54/bike-757914_1280.png",
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 1,
  },
  welcome: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
});
