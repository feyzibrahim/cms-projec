import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.studentProfileView}>
        <Text style={styles.studTitle}>STUDENT PROFILE</Text>
        <View>
          <Text style={styles.nameSub}>NAME</Text>
          <Text style={styles.nameSub}>vani Sharma</Text>
        </View>
        <View style={styles.regNoView}>
          <Text style={styles.regnoSub}>REG NO</Text>
          <Text style={styles.regnoSub}>LIAUSCS019</Text>
        </View>
        <View style={styles.yearView}>
          <Text style={styles.yearSub}>YEAR</Text>
          <Text style={styles.yearSub}>2020-2023</Text>
        </View>
        <View style={styles.departmentView}>
          <Text style={styles.deptSub}>DEPARTMENT</Text>
          <Text style={styles.deptSub}>BSC computer science</Text>
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
    width: Dimensions.get("window").width,
  },
  studentProfileView: {
    backgroundColor: "#A38ED1",
    height: 400,
    borderRadius: 15,
    alignSelf: "stretch",
  },
  studTitle: {
    textAlign: "center",
    padding: 30,
    fontSize: 15,
  },
  nameSub: {
    textAlign: "center",
  },
  regnoSub: {
    textAlign: "center",
  },
  regNoView: {
    padding: 20,
  },
  yearSub: {
    textAlign: "center",
  },
  deptSub: {
    textAlign: "center",
  },
  departmentView: {
    padding: 20,
  },
});
