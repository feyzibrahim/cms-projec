import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/login";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="loginpage"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
