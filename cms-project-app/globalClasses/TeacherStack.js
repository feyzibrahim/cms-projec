import { createDrawerNavigator } from "@react-navigation/drawer";
import TeacherProfile from "../pages/Teachers/TeacherProfile";
import TeacherPage from "../pages/Teachers/TeacherPage";
import TTDayList from "../pages/Common/TTDayList";
import Setting from "../pages/Setting";
import Help from "../pages/Help";
import StudentsYearList from "../pages/Teachers/StudentsYearList";
import CustomDrawer from "../globalClasses/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import TeacherList from "../pages/Common/TeachersList";
import Events from "../pages/Common/Events";
import Announcement from "../pages/Common/Announcement";
import ViewSem from "../pages/Teachers/Attendance/ViewSem";
import SubjectList from "../pages/Students/Subjects/SubjectList";
import AssignmentPage from "../pages/Teachers/AssignmentPage";
import InternalPage from "../pages/Teachers/InternalExam/InternalPage";

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
        name="timetable"
        component={TTDayList}
        options={{
          title: "Time Table",
          drawerIcon: ({ color }) => (
            <Ionicons name="book-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="subjects"
        component={SubjectList}
        options={{
          title: "Subjects",
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
        component={StudentsYearList}
        options={{
          title: "Students",
          drawerIcon: ({ color }) => (
            <Ionicons name="people-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="assignment"
        component={AssignmentPage}
        options={{
          title: "Assignments",
          drawerIcon: ({ color }) => (
            <Ionicons name="duplicate-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Attendance"
        component={ViewSem}
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
        component={InternalPage}
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
