import { View, Text, Image, TouchableOpacity } from "react-native";
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
      {/* ILLUSTRATION */}
      <View style={styles.illustrationContainer}>
        <Image
          style={styles.illustration}
          source={require("../../assets/images/auth.png")}
        />
      </View>
      {/* Login Section*/}
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => console.log("continue with google")}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By continuing, you aggree to our Terms and Privacy policy
        </Text>
      </View>
    </View>
  );
}
