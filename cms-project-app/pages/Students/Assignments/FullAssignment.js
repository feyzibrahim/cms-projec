import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";
import Loading from "../../../globalClasses/Loading";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import { BASE_URL } from "../../../globalClasses/Config";
import moment from "moment";

export default function FullAssignment() {
  const [assignments, setAssignments] = useState();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/api/assignments/semester/643432e2599ccaa0f668f0b5`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
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
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View style={styles.subjectView}>
                <View
                  style={{
                    padding: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignContent: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.subTitle}>{item.subject.name}</Text>
                    <Text>{item.title}</Text>
                  </View>
                  <Text style={{ paddingTop: 10 }}>{item.description}</Text>
                </View>
                <View style={styles.topBorder}>
                  <View style={styles.verticalText}>
                    <MaterialIcons name="person" size={15} />
                    <Text> {item.teacher.teacherName}</Text>
                  </View>
                  <View style={styles.verticalText}>
                    <MaterialIcons name="schedule" size={15} />
                    <Text> {moment(item.dueDate).format("DD/MM/yyyy")}</Text>
                  </View>
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
    paddingVertical: 10,
    paddingHorizontal: 10,
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
    paddingVertical: 10,
  },
  verticalText: {
    flexDirection: "row",
    alignItems: "center",
  },
  topBorder: {
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
});
