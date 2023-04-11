import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TeacherStack from "./TeacherStack";
import StudentStack from "./StudentStack";
import { useAuthContext } from "../hooks/useAuthContext";
import { ActivityIndicator, View } from "react-native";

export default function Home() {
  const { isLoading, user } = useAuthContext();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        user.userType === "Teacher" || user.userType === "teacher" ? (
          <TeacherStack />
        ) : (
          <StudentStack />
        )
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
