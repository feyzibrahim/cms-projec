import TeacherProfile from "../pages/TeacherProfile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TeacherPage from "../pages/TeacherPage";
import Attendence from "../pages/Attendence";
import Internal from "../pages/Internal";
import Sub from "../pages/components/Sub";
import StudentMarksheet from "../pages/StudentMarksheet";
import Setting from "../pages/Setting";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import Help from "../pages/Help";
import StudentsList from "../pages/StudentsList";
import CustomDrawer from "../globalClasses/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default function TeacherDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Teacher"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Teacher"
        component={TeacherPage}
        options={{
          title: "Home",
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profilepage"
        component={TeacherProfile}
        options={{
          title: "Profile",
          drawerIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="subject"
        component={Sub}
        options={{
          title: "Time Table",
          drawerIcon: ({ color }) => (
            <Ionicons name="book-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="studentsList"
        component={StudentsList}
        options={{
          title: "Students List",
        }}
      />
      <Drawer.Screen
        name="Attendencepage"
        component={Attendence}
        options={{
          title: "Add Attendence",
          drawerIcon: ({ color }) => (
            <Ionicons
              name="checkmark-done-circle-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="internal"
        component={Internal}
        options={{
          title: "Internal Marks",
          drawerIcon: ({ color }) => (
            <Ionicons name="school-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Studentmarksheet"
        component={StudentMarksheet}
        options={{ title: "Marksheet" }}
      />
      <Drawer.Screen
        name="Settings"
        component={Setting}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="privacypolicy"
        component={Privacy}
        options={{ title: "Privacy Policy" }}
      />
      <Drawer.Screen
        name="termsandconditions"
        component={Terms}
        options={{ title: "Terms & Conditions" }}
      />
      <Drawer.Screen name="help" component={Help} options={{ title: "Help" }} />
    </Drawer.Navigator>
  );
}
