import { createDrawerNavigator } from "@react-navigation/drawer";
import Studentspage from "../pages/Studentspage";
import ViewSem from "../pages/Students/Attendance/ViewSem";
import Internal from "../pages/Internal";
import TTDayList from "../pages/Common/TTDayList";
import Setting from "../pages/Setting";
import CustomDrawer from "../globalClasses/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import TeacherList from "../pages/Common/TeachersList";
import StudentProfile from "../pages/Students/StudentProfile";
import Announcement from "../pages/Common/Announcement";
import Events from "../pages/Common/Events";

const Drawer = createDrawerNavigator();

export default function StudentStack() {
  return (
    <Drawer.Navigator
      initialRouteName="students"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="students"
        component={Studentspage}
        options={{
          title: "Home",
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="announcement"
        component={Announcement}
        options={{
          title: "Notification",
          drawerIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="events"
        component={Events}
        options={{
          title: "College Events",
          drawerIcon: ({ color }) => (
            <Ionicons name="megaphone-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profilepage"
        component={StudentProfile}
        options={{
          title: "Profile",
          drawerIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="subject"
        component={TTDayList}
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
        name="Attendencepage"
        component={ViewSem}
        options={{
          title: "View Attendance",
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
    </Drawer.Navigator>
  );
}
