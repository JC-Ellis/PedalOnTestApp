import React, { useState, useEffect, useContext } from "react";
import { ScrollView, View, Text, Image, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { supabase } from "../lib/supabase";
import { UserContext } from "./UserContext";
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function EditUser() {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [user_location, setLocation] = useState("");
  const [avatar_url, setAvatarUrl] = useState("");
  const [updateComplete, setUpdateComplete] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.id) return;
  
      const { data, error } = await supabase
        .from("user_profile")
        .select("*")
        .eq("user_id", user.id)
        .single();
  
      if (error) {
        console.error("Error fetching profile:", error.message);
      } else if (data) {
        setDisplayName(data.username || "");
        setUserFirstName(data.first_name || "");
        setUserLastName(data.last_name || "");
        setUserAge(data.user_age || "");
        setLocation(data.user_location || "");
        setAvatarUrl(data.profile_image || "");
      }
    };
  
    fetchProfile();
  }, [user, updateComplete]);

  useEffect(() => {
    if (updateComplete) {
      setUpdateComplete(false);
    }
  }, [updateComplete]);

  async function editUserDetails() {
    if (!user) return;
  
    setLoading(true);
  
    const { error } = await supabase
      .from("user_profile")
      .update({
        username: displayName,
        first_name: userFirstName,
        last_name: userLastName,
        user_age: userAge,
        user_location: user_location,
        profile_image: avatar_url,
      })
      .eq("user_id", user?.id);
  
    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Success", "Details updated!");
      setUpdateComplete(true);
      navigation.goBack();
    }
  
    setLoading(false);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Edit Your Profile!</Text>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2024/12/22/07/36/update-9283946_1280.png",
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Display Name"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={(text) => setDisplayName(text)}
          value={displayName}
          placeholder="Username"
          textContentType="nickname"
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
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
          onChangeText={(integer) => setUserAge(text)}
          value={userAge}
          placeholder="99"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Location"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setLocation(text)}
          value={user_location}
          placeholder="Bristol?"
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
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title={loading ? "Updating..." : "Update"}
          disabled={loading}
          onPress={() => editUserDetails()}
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
    width: 200,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 40,
  },
});
