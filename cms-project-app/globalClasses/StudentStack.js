import Profile from "../pages/TeacherProfile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Studentspage from "../pages/Studentspage";
import Attendence from "../pages/Attendence";
import Internal from "../pages/Internal";
import Sub from "../pages/componants/Sub";
import StudentMarksheet from "../pages/StudentMarksheet";
import Setting from "../pages/Setting";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import Help from "../pages/Help";

const Stack = createNativeStackNavigator();

export default function StudentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="students"
        component={Studentspage}
        options={{ title: "Ecampus" }}
      />
      <Stack.Screen name="profilepage" component={Profile} />
      <Stack.Screen name="subject" component={Sub} />
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
    </Stack.Navigator>
  );
}
