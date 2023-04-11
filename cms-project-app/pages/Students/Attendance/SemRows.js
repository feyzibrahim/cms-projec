import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../globalClasses/Config";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SemRows(props) {
  const { item, navigation } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const [data, setData] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${BASE_URL}/api/attendance/${user.dataAccessId}/${item.value}/stats`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AttendancePage", { item })}
    >
      <View style={[styles.listItem]}>
        <Text style={styles.itemTitle}>{item.label}</Text>
        <Text>
          {data.presentDays !== 0 && data.workingDays !== 0
            ? `${((data.presentDays / data.workingDays) * 100).toFixed(2)}%`
            : "Not Added Yet"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 22,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
