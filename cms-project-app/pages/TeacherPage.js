import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import DueWork from "./components/DueWork";
import TimeTable from "./components/TimeTable";
import EventsList from "./components/EventsList";

export default function TeacherPage() {
  const { user } = useAuthContext();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>Hello, {user && user.email}</Text>
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

      <EventsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 55,
  },
  titleContainer: {
    padding: 20,
  },
  classAndClassCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  dueWorkView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
