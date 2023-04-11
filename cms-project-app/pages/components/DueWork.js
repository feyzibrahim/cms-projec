import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";
import Loading from "../../globalClasses/Loading";
import { useAuthContext } from "../../hooks/useAuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import { BASE_URL } from "../../globalClasses/Config";
import moment from "moment";

export default function DueWork() {
  const [assignments, setAssignments] = useState();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${BASE_URL}/api/assignments/semester/643432e2599ccaa0f668f0b5/due-soon`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        setAssignments(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={styles.VerticalScroll}>
      <FlatList
        data={assignments}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View style={styles.subjectView}>
                <View style={styles.verticalText}>
                  <MaterialIcons name="schedule" size={15} />
                  <Text> {moment(item.dueDate).format("DD/MM/yyyy")}</Text>
                </View>
                <View style={{ padding: 20 }}>
                  <Text style={styles.subTitle}>{item.subject.name}</Text>
                  <Text>{item.title}</Text>
                </View>
                <View style={[styles.verticalText, styles.topBorder]}>
                  <MaterialIcons name="person" size={15} />
                  <Text> {item.teacher.teacherName}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  VerticalScroll: {
    height: 250,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subjectView: {
    flex: 1,
    height: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 20,
    marginRight: 10,
  },
  verticalText: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  topBorder: {
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
});
