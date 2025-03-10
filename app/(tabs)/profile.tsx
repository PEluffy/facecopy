import { View, Text, Button } from "react-native";
import React, { act } from "react";
import { useClerk } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/profile.styles";
import { COLORS } from "@/constants/theme";

export default function profile() {
  const { signOut, user } = useClerk();
  const firstName = user?.firstName;
  const activeUserName = user?.fullName;

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.username}>{firstName}</Text>
        <Ionicons
          name="exit-outline"
          onPress={() => {
            signOut({ redirectUrl: "../login" });
          }}
          size={36}
          color={COLORS.primary}
        />
      </View>
      <View style={styles.profilepiccontainer}>
        <View style={styles.followerscontainer}>
          <Ionicons name="person-circle" size={100} color={COLORS.primary} />
          <Text>{activeUserName}</Text>
          <Text>Developer</Text>
        </View>
        <View style={styles.followerscontainer}>
          <Text style={styles.postfollowerfollowing}>2</Text>
          <Text style={styles.postfollowerfollowing}>Posts</Text>
        </View>
        <View style={styles.followerscontainer}>
          <Text style={styles.postfollowerfollowing}>0</Text>
          <Text style={styles.postfollowerfollowing}>following</Text>
        </View>
        <View style={styles.followerscontainer}>
          <Text style={styles.postfollowerfollowing}>0</Text>
          <Text style={styles.postfollowerfollowing}>followers</Text>
        </View>
      </View>
    </View>
  );
}
