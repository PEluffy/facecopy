import { COLORS } from "@/constants/theme";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 30,
  },
  nav: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: height * 0.01,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postfollowerfollowing: {
    fontSize: 16,
    color: COLORS.grey,
  },
  profilepiccontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  followerscontainer: {
    flexDirection: "column",
    alignItems: "center",
  },
});
