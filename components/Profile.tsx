import "react-native-url-polyfill/auto";
import React, {useContext} from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { UserContext } from "./UserContext";

export default function Profile({ user, navigation }: { user: any, navigation: any }) {
  const userInfo = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Your profile{" "}
      {userInfo?.user_metadata?.display_name || userInfo?.email || "Guest"}!</Text>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2013/07/13/12/49/guy-160411_1280.png",
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <Button
        title="Open Gallery"
        onPress={() => navigation.navigate('Your Gallery')}
      />
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
