import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import DueWork from "./componants/DueWork";
// import { MaterialIcons } from "@expo/vector-icons";
import TimeTable from "./componants/TimeTable";

export default function TeacherPage() {
  const { user } = useAuthContext();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.subTitle}>Hello, {user && user.email}</Text>
        </View>

        <View style={styles.classAndClassCount}>
          <View>
            <Text>Classes</Text>
          </View>
          <View>
            <Text>5 classes Today</Text>
          </View>
        </View>

        <TimeTable />

        <View style={styles.dueWorkView}>
          <View>
            <Text styles={styles.dueText}>Due work</Text>
          </View>
          <View>
            <Text>View all</Text>
          </View>
        </View>

        <DueWork />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 55,
  },
  classAndClassCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  dueWorkView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
