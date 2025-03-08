import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();
  console.log("isSignedIN", isSignedIn);

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }
  // redirect to login.tsx
  return <Stack screenOptions={{ headerShown: false }} />;
}
