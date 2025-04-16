import "react-native-url-polyfill/auto";
import React, { useContext } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { UserContext } from "./UserContext";

export default function Profile({
  user,
  navigation,
}: {
  user: any;
  navigation: any;
}) {
  const userInfo = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.username}>
        {userInfo?.user_metadata?.display_name || userInfo?.email || "Guest"}!
      </Text>

      <Image
        source={{
          uri:
            userInfo?.user_metadata?.avatarUrl ||
            "https://cdn.pixabay.com/photo/2013/07/13/12/49/guy-160411_1280.png",
        }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Email:</Text> {userInfo?.email || "Guest"}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Name:</Text>{" "}
          {userInfo?.user_metadata?.first_name + " " + userInfo?.user_metadata?.last_name || "No name set"}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Age:</Text>{" "}
          {userInfo?.user_metadata?.age || "No age set"}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Location:</Text>{" "}
          {userInfo?.user_metadata?.location || "No location set"}
        </Text>
      </View>

      <Button
        title="Open Gallery"
        onPress={() => navigation.navigate("Your Gallery")}
        style={styles.button}
      />
            <Button
        title="Edit Profile"
        onPress={() => navigation.navigate("Edit Profile")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 30,
    color: "#333",
  },
  username: {
    fontSize: 20,
    marginVertical: 10,
    color: "#555",
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  infoBox: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    width: "100%",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#444",
  },
  label: {
    fontWeight: "600",
    color: "#222",
  },
  button: {
    marginTop: 10,
    width: "100%",
    borderRadius: 8,
  },
});
