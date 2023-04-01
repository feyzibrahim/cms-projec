import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Studentspage({ navigation }) {
  const { logout } = useAuthContext();
  const gotoattendace = () => {
    navigation.navigate("Attendencepage");
  };

  const gotoInternal = () => {
    navigation.navigate("internal");
  };

  const gotosetting = () => {
    navigation.navigate("Setting");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.ecampTitle}>Ecampus</Text>
        </View>

        <View>
          <Text styles={styles.subTitle}>Hello, Guyz</Text>
        </View>

        <View style={styles.classAndClassCount}>
          <View>
            <Text>classes</Text>
          </View>
          <View>
            <Text>5 classes Today</Text>
          </View>
        </View>

        <View style={styles.subjectView}>
          <TouchableOpacity>
            <Text>Java</Text>
            <Text>09:00-10:00</Text>
          </TouchableOpacity>
          <View style={styles.subjectSubView}>
            <TouchableOpacity>
              <Text>Teacher: Neethu</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.dueWorkView}>
          <View>
            <Text styles={styles.dueText}>Due work</Text>
          </View>
          <View>
            <Text>View all</Text>
          </View>
        </View>

        <View style={styles.homeWorkView}>
          <TouchableOpacity>
            <Text>php programming</Text>
            <Text>2 day left</Text>
            <Text>cookies uses cases</Text>
            <Text>read page no 129-135</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.markandinternal}>
          <View style={styles.addInternalView}>
            <TouchableOpacity onPress={gotoInternal}>
              <Text>View Internals</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addAttendenceView}>
            <TouchableOpacity onPress={gotoattendace}>
              <Text>View Attendence</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.addsettings}>
          <TouchableOpacity onPress={gotosetting}>
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}
        >
          <Pressable
            style={{
              backgroundColor: "#A38ED1",
              justifyContent: "center",
              alignItems: "center",
              elevation: 4,
              padding: 20,
            }}
            android_ripple={{
              color: "black",
            }}
            onPress={() => logout()}
          >
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="log-out-outline" size={22} />
              <Text style={{ textAlign: "center" }}>Log Out</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFDFDf",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    width: Dimensions.get("window").width,
  },
  ecampTitle: {
    fontWeight: "bold",
    margin: 20,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  classAndClassCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  subjectView: {
    backgroundColor: "#C9DCC7",
    padding: 20,
    marginVertical: 40,
    borderRadius: 10,
    alignSelf: "stretch",
  },
  subjectSubView: {
    backgroundColor: "#B5A2E0",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 30,
    borderRadius: 10,
    alignSelf: "stretch",
  },
  dueWorkView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",
  },
  dueText: {
    margin: 40,
  },
  homeWorkView: {
    backgroundColor: "#A38ED1",
    padding: 50,
    marginVertical: 50,
    alignSelf: "stretch",
    borderRadius: 10,
  },
  markandinternal: {
    flex: 1,
    flexDirection: "row",
  },
  addInternalView: {
    backgroundColor: "#553893",
    padding: 20,
    alignSelf: "space-around",
    flexDirection: "row",
  },
  addAttendenceView: {
    backgroundColor: "#553893",
    padding: 20,
    alignSelf: "space-around",
  },
  addsettings: {
    backgroundColor: "#553893",
    padding: 20,
    margin: 30,
    borderRadius: 5,
  },
});
