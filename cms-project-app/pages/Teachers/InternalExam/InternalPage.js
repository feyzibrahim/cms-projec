import InternalForm from "./InternalForm";
import InternalMark from "./InternalMark";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const InternalPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListInternals"
        component={InternalMark}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateInternals"
        component={InternalForm}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default InternalPage;
