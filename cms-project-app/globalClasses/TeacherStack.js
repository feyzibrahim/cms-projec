import { createDrawerNavigator } from "@react-navigation/drawer";
import TeacherProfile from "../pages/Teachers/TeacherProfile";
import TeacherPage from "../pages/Teachers/TeacherPage";
import Attendence from "../pages/Attendence";
import Internal from "../pages/Internal";
import TTDayList from "../pages/Common/TTDayList";
import Setting from "../pages/Setting";
import Help from "../pages/Help";
import YearList from "../pages/Teachers/YearList";
import CustomDrawer from "../globalClasses/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import TeacherList from "../pages/Common/TeachersList";
import Events from "../pages/Common/Events";
import Announcement from "../pages/Common/Announcement";

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
        name="help"
        component={Help}
        options={{
          title: "Help",
          drawerIcon: ({ color }) => (
            <Ionicons name="help-circle-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
