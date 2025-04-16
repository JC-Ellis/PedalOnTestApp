import React, { useState } from "react";
import { Alert, View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { supabase } from "../lib/supabase";
import { Button, Input } from "@rneui/themed";

export default function Auth({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const [displayName, setDisplayName] = useState("");
  // const [userAge, setUserAge] = useState("");
  // const [userFirstName, setUserFirstName] = useState("");
  // const [userLastName, setUserLastName] = useState("");
  // const [user_location, setLocation] = useState("");
  // const [avatar_url, setAvatarUrl] = useState("");

  async function signUpWithEmail() {
    setLoading(true);
  
    const {
      data: { session, user },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
    });
  
    if (error) {
      Alert.alert(error.message);
      setLoading(false);
      return;
    }
  
    if (!session) {
      Alert.alert("Please check your inbox for email verification!");
      setLoading(false);
      return;
    }
  
    const userId = session.user.id;
  
    const { error: profileError } = await supabase.from("user_profile").insert([
      {
        user_id: userId,
        // username: displayName,
      },
    ]);
  
    if (profileError) {
      Alert.alert("Profile creation failed", profileError.message);
    } else {
      Alert.alert("Signup successful!");
    }
  
    setLoading(false);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>PedalOn</Text>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2013/07/13/13/39/bicycle-161315_960_720.png",
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text>Already have an account?</Text>
      <Button title="Sign in" onPress={() => navigation.navigate("Sign In")} />
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
        />
      </View>
      {/* <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Display Name"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={(text) => setDisplayName(text)}
          value={displayName}
          placeholder="Username"
          textContentType="nickname"
        />
      </View> */}
      {/* <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="First Name"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(text) => setUserFirstName(text)}
          value={userFirstName}
          placeholder="Your First Name"
          autoCapitalize={"none"}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Last Name"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(text) => setUserLastName(text)}
          value={userLastName}
          placeholder="Your Last Name"
          autoCapitalize={"none"}
        />
      </View>
      <View>
        <Input
          label="Age"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(integer) => setUserAge(integer)}
          value={userAge}
          placeholder="100"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Location"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setLocation(text)}
          value={user_location}
          placeholder="City"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Avatar url"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setAvatarUrl(text)}
          value={avatar_url}
          placeholder="www.coolpic.com"
          autoCapitalize={"none"}
        />
      </View> */}
      <View style={styles.verticallySpaced}>
        <Button
          style={styles.button}
          title="Sign up"
          disabled={loading}
          onPress={() => signUpWithEmail()}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
  image: {
    width: 400,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 40,
  },
  button: {
    paddingBottom: 40,
    marginBottom: 40,
  },
});
