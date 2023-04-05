import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TimeTable() {
  const [classArray, setClassArray] = useState([
    {
      subject: "Java",
      time: "09:00 - 10:00",
      duration: "1Hr",
      teacher: "Neethu Prakash",
    },
    {
      subject: "Android",
      time: "10:00 - 11:00",
      duration: "1Hr",
      teacher: "Sumesh Babu",
    },
    {
      subject: "Lab - Java",
      time: "11:15 - 12:15",
      duration: "1Hr",
      teacher: "Neethu Prakash",
    },
    {
      subject: "Operating System",
      time: "01:30 - 02:30",
      duration: "1Hr",
      teacher: "Alanta Alphonse",
    },
    {
      subject: "Data Structure",
      time: "02:30 - 03:130",
      duration: "1Hr",
      teacher: "Sumesh Babu",
    },
  ]);

  return (
    <View style={styles.VerticalScroll}>
      <FlatList
        data={classArray}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.subjectView}>
              <Text style={styles.subTitle}>{item.subject}</Text>
              <Text>{item.time}</Text>
              <View style={styles.subjectSubView}>
                <Text>{item.teacher}</Text>
              </View>
              <View style={styles.scheduleAndIcon}>
                <MaterialIcons name="schedule" size={20} />
                <Text> {item.duration}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  VerticalScroll: {
    height: 200,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subjectView: {
    backgroundColor: "#A38ED1",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 30,
    borderRadius: 10,
    height: "100%",
    marginRight: 10,
  },
  subjectSubView: {
    backgroundColor: "#B5A2E0",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  scheduleAndIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
