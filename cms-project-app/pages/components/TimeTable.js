import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../globalClasses/Config";
import Loading from "../../globalClasses/Loading";
import { useAuthContext } from "../../hooks/useAuthContext";
import moment from "moment";

export default function TimeTable() {
  const { user } = useAuthContext();
  const [timetable, setTimeTable] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function getCurrentDay() {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const date = new Date();
    const day = date.getDay();

    if (day === 6 || day === 0) {
      return "Monday";
    } else {
      return daysOfWeek[day];
    }
  }
  useEffect(() => {
    setIsLoading(true);
    const day = getCurrentDay();
    axios
      .get(
        `${BASE_URL}/api/timetable/${day.toLowerCase()}?departmentId=6431014d0a7f4d7822ca0cb0&year=1`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        setTimeTable(res.data);
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
        data={timetable}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.subjectView}>
              <Text style={styles.subTitle}>{item.subject}</Text>
              <Text>
                {moment(item.startTime).format("hh:mm A")} -{" "}
                {moment(item.endTime).format("hh:mm A")}
              </Text>
              <View style={styles.subjectSubView}>
                <Text>{item.teacherName}</Text>
              </View>
              <View style={styles.scheduleAndIcon}>
                <MaterialIcons name="schedule" size={20} />
                <Text> 1 Hr</Text>
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
