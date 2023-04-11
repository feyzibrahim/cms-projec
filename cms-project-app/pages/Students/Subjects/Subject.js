import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../globalClasses/Config";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Loading from "../../../globalClasses/Loading";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Separator from "../../Common/Separator";

export default function Subject(props) {
  const { semester } = props;
  const { user } = useAuthContext();
  const [subjects, setSubjects] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // console.log(semester);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${BASE_URL}/api/subject?department=${user.departmentId}&semester=${semester._id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        setSubjects(res.data.subjects);
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
    const { name, code } = item;
    return (
      <View style={[styles.listItem]}>
        <View style={styles.itemContent}>
          <Text style={styles.itemPeriod}>{name}</Text>
          <View>
            <Text style={styles.itemDetails}>Subject Code:{code}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={subjects}
      renderItem={renderPeriod}
      key={(item) => item}
      // keyExtractor={(item, index) => `${item._id}-${index}`}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={({ index }) => (
        <Separator index={index} length={subjects.length} />
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
    justifyContent: "space-between",
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
