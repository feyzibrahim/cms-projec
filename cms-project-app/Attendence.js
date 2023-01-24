import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState } from "react";

export default function Attendence() {
  const date = new Date().getDate();
  const month = new Date().getMonth()+1;
  const year =  new Date().getFullYear();

  const [attendence, setttAttendence] = useState([
    { name: "aleesha", rollno: "1", key: "1", status: "present" },
    { name: "aneena", rollno: "2", key: "2", status: "present" },
    { name: "linto", rollno: "3", key: "3", status: "absent" },
    { name: "ahalya", rollno: "4", key: "4", status: "absent" },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Text style={styles.nav}>Attendace</Text>
        <Text>{date}-{month}-{year}</Text>
      </View>
      <FlatList
        data={attendence}
        renderItem={({ item }) => (
          //   <View style={styles.subItem}>
          <View style={styles.attend}>
            <TouchableOpacity>
              <View style={styles.attendsub}>
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.rollno}</Text>
                </View>
                <View>
                  <Text>{item.status}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          //   </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfdfdf",
    // alignItems: 'center',
    justifyContent: "center",
    paddingVertical: 30,
    width: Dimensions.get("window").width,
  },
  one: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  attend: {
    marginVertical: 10,
    padding: 10,
    borderColor: "black",
    borderBottomWidth: 1,
    borderStyle: "dashed",
  },
  attendsub: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  nav: {
    fontWeight: "bold",
  },
});
