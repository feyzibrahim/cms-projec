import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";

const Stack = createStackNavigator();

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
