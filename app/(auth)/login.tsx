import { View, Text } from "react-native";
import React from "react";
import { styles } from "@/styles/auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

export default function login() {
  return (
    <View style={styles.container}>
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons
            name="accessibility"
            size={32}
            color={COLORS.primary}
          ></Ionicons>
        </View>
        <Text style={styles.appName}>facecopy</Text>
        <Text style={styles.tagline}>don't miss anything</Text>
      </View>
    </View>
  );
}
