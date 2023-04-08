import { createDrawerNavigator } from "@react-navigation/drawer";
import TeacherProfile from "../pages/TeacherProfile";
import TeacherPage from "../pages/TeacherPage";
import Attendence from "../pages/Attendence";
import Internal from "../pages/Internal";
import Sub from "../pages/components/Sub";
import StudentMarksheet from "../pages/StudentMarksheet";
import Setting from "../pages/Setting";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import Help from "../pages/Help";
import YearList from "../pages/YearList";
import CustomDrawer from "../globalClasses/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import TeacherList from "../pages/TeachersList";

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
        name="teachersList"
        component={TeacherList}
        options={{
          title: "Teachers",
          drawerIcon: ({ color }) => (
            <Ionicons name="people-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="studentsList"
        component={YearList}
        options={{
          title: "Students",
          drawerIcon: ({ color }) => (
            <Ionicons name="people-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Attendencepage"
        component={Attendence}
        options={{
          title: "Add Attendance",
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
        name="Settings"
        component={Setting}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Studentmarksheet"
        component={StudentMarksheet}
        options={{ title: "Mark Sheet" }}
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
