import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { BASE_URL } from "../../globalClasses/Config";
import { useAuthContext } from "../../hooks/useAuthContext";
import Loading from "../../globalClasses/Loading";

export default function TimetableScreen() {
  const [dummyData, setDummyData] = useState("");
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${BASE_URL}/api/timetable?departmentId=${user.departmentId}&semester=1`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        setDummyData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderPeriods = (periods) => {
    return periods.map((period) => (
      <View style={styles.period} key={period.periodNumber}>
        <Text style={styles.periodText}>{period.subject}</Text>
        <Text style={styles.periodTextS}>{period.teacherName}</Text>
      </View>
    ));
  };

  const renderDayTable = (day, periods) => {
    return (
      <View style={styles.table}>
        <Text style={styles.tableHeader}>{day}</Text>
        {renderPeriods(periods)}
      </View>
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timetable</Text>
      <View>
        {dummyData && (
          <View style={styles.timetable}>
            {renderDayTable("Monday", dummyData.timetable.days.monday)}
            {renderDayTable("Tuesday", dummyData.timetable.days.tuesday)}
            {renderDayTable("Wednesday", dummyData.timetable.days.wednesday)}
            {renderDayTable("Thursday", dummyData.timetable.days.thursday)}
            {renderDayTable("Friday", dummyData.timetable.days.friday)}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "90deg" }],
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timetable: {
    flexDirection: "row",
  },
  table: {
    marginHorizontal: 1,
  },
  tableHeader: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 10,
    paddingVertical: 3,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "black",
    margin: 2,
  },
  period: {
    borderWidth: 1,
    borderColor: "black",
    margin: 2,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  periodText: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "500",
  },
  periodTextS: {
    fontSize: 10,
    color: "#444",
    marginBottom: 5,
  },
});
