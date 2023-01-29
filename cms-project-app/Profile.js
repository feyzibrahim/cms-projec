import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.studentprofile}>
        <Text style={styles.stud}>STUDENT PROFILE</Text>
        <View>
          <Text style={styles.namesub}>NAME</Text>
          <Text style={styles.namesub}>vani Sharma</Text>
        </View>
        <View style={styles.regnomain}>
          <Text style={styles.regnosub}>REG NO</Text>
          <Text style={styles.regnosub}>LIAUSCS019</Text>
        </View>
        <View style={styles.yearmain}>
          <Text style={styles.yearsub}>YEAR</Text>
          <Text style={styles.yearsub}>2020-2023</Text>
        </View>
        <View style={styles.deptmain}>
          <Text style={styles.deptsub}>DEPARTMENT</Text>
          <Text style={styles.deptsub}>BSC computer science</Text>
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
    paddingHorizontal: 30,
    width: Dimensions.get("window").width,
  },
  studentprofile: {
    backgroundColor: "#A38ED1",
    height: 400,
    width: Dimensions,
    borderRadius: 15,
    alignSelf: "stretch",
  },
  stud: {
    textAlign: "center",
    padding: 30,
    fontSize: 15,
  },
  namesub: {
    textAlign: "center",
  },
  regnosub: {
    textAlign: "center",
  },
  regnomain: {
    padding: 20,
  },
  yearsub: {
    textAlign: "center",
  },
  deptsub: {
    textAlign: "center",
  },
  deptmain: {
    padding: 20,
  },
});
