import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../globalClasses/Config";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Loading from "../../globalClasses/Loading";
import { useAuthContext } from "../../hooks/useAuthContext";
import moment from "moment";

export default function TimetableList(props) {
  const { day } = props;
  const { user } = useAuthContext();
  const [timetable, setTimeTable] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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

  const renderPeriod = ({ item }) => {
    const { periodNumber, startTime, endTime, subject, teacherName } = item;
    return (
      <View style={[styles.listItem]}>
        <View style={styles.itemContent}>
          <Text style={styles.itemPeriod}>{periodNumber}</Text>
          <View>
            {subject !== "" && (
              <Text style={styles.itemDetails}>
                {subject} - {teacherName}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.itemTime}>
          <Text style={styles.itemTimeText}>
            {moment(startTime).format("hh:mm A")}
          </Text>
          <Text style={styles.itemTimeText}>
            {moment(endTime).format("hh:mm A")}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={timetable}
      renderItem={renderPeriod}
      keyExtractor={(item, index) => `${item.periodNumber}-${index}`}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  breakItem: {
    backgroundColor: "#f0f0f0",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  lunchItem: {
    backgroundColor: "#f0f0f0",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemTime: {
    marginRight: 16,
  },
  itemTimeText: {
    fontSize: 12,
    color: "#666",
  },
  itemContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  itemPeriod: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    paddingRight: 10,
  },
  itemDetails: {
    fontSize: 14,
    color: "#666",
  },
});
