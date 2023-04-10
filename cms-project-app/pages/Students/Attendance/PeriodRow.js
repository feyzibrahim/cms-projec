import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../globalClasses/Config";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Loading from "../../../globalClasses/Loading";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Separator from "../../Common/Separator";

export default function PeriodRow(props) {
  const { date } = props;
  const dd = new Date(date);
  const isoString = dd.toISOString();
  const { user } = useAuthContext();
  const [attendance, setTimeTable] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/api/attendance/${user.dataAccessId}/1/${isoString}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
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
    const { period, status } = item;
    return (
      <View style={[styles.listItem]}>
        <View style={styles.itemContent}>
          <Text style={styles.itemPeriod}>{period}</Text>
        </View>
        <View style={styles.itemTime}>
          <Text style={styles.itemTimeText}>{status}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={attendance}
      renderItem={renderPeriod}
      keyExtractor={(item, index) => `${item._id}-${index}`}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={({ index }) => (
        <Separator index={index} length={attendance.length} />
      )}
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
});
