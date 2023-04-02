import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
export default function DueWork() {
  const [dueWork, setClassArray] = useState([
    {
      subject: "Java",
      lastSubmitTime: "10/11/2023",
      work: "Note Completion First Module",
    },
    {
      subject: "Android",
      lastSubmitTime: "10/11/2023",
      work: "Note Completion First Module",
    },
    {
      subject: "Lab - Java",
      lastSubmitTime: "10/11/2023",
      work: "Note Completion First Module",
    },
  ]);

  return (
    <View style={styles.VerticalScroll}>
      <FlatList
        data={dueWork}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.subjectView}>
              <Text>{item.work}</Text>
              <Text style={styles.subTitle}>{item.subject}</Text>
              <View>
                {/* <MaterialIcons name="history" size={30} /> */}
                <Text>{item.lastSubmitTime}</Text>
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
});
