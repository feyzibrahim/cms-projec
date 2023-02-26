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
import Aboutus from "./pages/Aboutus";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginpage" component={Login} />
        <Stack.Screen name="profilepage" component={Profile} />
        <Stack.Screen name="students" component={Studentspage} />
        <Stack.Screen name="subject" component={Sub} />
        <Stack.Screen name="Teacher" component={TeacherPage} />
        <Stack.Screen name="Attendencepage" component={Attendence} />
        <Stack.Screen name="internal" component={Internal} />
        <Stack.Screen name="Studentmarksheet" component={StudentMarksheet} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="aboutus" component={Aboutus} />
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
