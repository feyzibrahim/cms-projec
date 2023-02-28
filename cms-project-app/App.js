import { StyleSheet } from "react-native";
import Profile from "./pages/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Studentspage from "./pages/Studentspage";
import TeacherPage from "./pages/TeacherPage";
import Login from "./pages/login";
import Attendence from "./pages/Attendence";
import Internal from "./pages/Internal";
import Sub from "./pages/componants/Sub";
import StudentMarksheet from "./pages/StudentMarksheet";
import Setting from "./pages/Setting";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Help from "./pages/Help";
import Logout from "./pages/Logout";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="loginpage"
          component={Login}
          options={{ title: "Ecampus" }}
        />
        <Stack.Screen name="profilepage" component={Profile} />
        <Stack.Screen
          name="students"
          component={Studentspage}
          options={{ title: "Ecampus" }}
        />
        <Stack.Screen name="subject" component={Sub} />
        <Stack.Screen name="Teacher" component={TeacherPage} />
        <Stack.Screen name="Attendencepage" component={Attendence} />
        <Stack.Screen name="internal" component={Internal} />
        <Stack.Screen name="Studentmarksheet" component={StudentMarksheet} />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ title: "Ecampus" }}
        />
        <Stack.Screen
          name="privacypolicy"
          component={Privacy}
          options={{ title: "Ecampus" }}
        />
        <Stack.Screen
          name="termsandconditions"
          component={Terms}
          options={{ title: "Ecampus" }}
        />
        <Stack.Screen
          name="help"
          component={Help}
          options={{ title: "Ecampus" }}
        />
        <Stack.Screen
          name="logout"
          component={Logout}
          options={{ title: "Ecampus" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFDFDf",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
