import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function Studentspage() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.ecampTitle}>Ecampus</Text>
      </View>

      <View>
        <Text styles={styles.subTitle}>Hello,Sir/Madam</Text>
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
          <TouchableOpacity>
            <Text>View Internals</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addAttendenceView}>
          <TouchableOpacity>
            <Text>View Attendence</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    margin: 20,
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
    backgroundColor: "#553893",
    padding: 40,
    margin: 40,
    borderRadius: 10,
    alignSelf: "stretch",
  },
  subjectSubView: {
    backgroundColor: "pink",
    padding: 10,
    margin: 30,
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
    backgroundColor: "#553893",
    padding: 50,
    margin: 50,
    borderRadius: 10,
  },
  markandinternal: {
    flexDirection: "row",
  },
  addInternalView: {
    backgroundColor: "#553893",
    padding: 20,
    margin: 30,
  },
  addAttendenceView: {
    backgroundColor: "#553893",
    padding: 20,
    margin: 30,
  },
});
