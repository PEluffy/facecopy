import { View, Text, Button } from "react-native";
import { Link } from "expo-router";
import { styles } from "../../styles/auth.styles";
import { useClerk } from "@clerk/clerk-expo";

export default function Index() {
  const { signOut } = useClerk();
  return (
    <View style={styles.container}>
      <Text> feed screen in tabs</Text>
      <Button
        onPress={() => {
          signOut({ redirectUrl: "../(auth)/sign-up" });
        }}
        title="Sign Out"
      ></Button>
    </View>
  );
}
