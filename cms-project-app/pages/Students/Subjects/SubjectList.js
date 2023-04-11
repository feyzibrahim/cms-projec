import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../globalClasses/Config";
import { useAuthContext } from "../../../hooks/useAuthContext";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Loading from "../../../globalClasses/Loading";
import Separator from "../../Common/Separator";
import Subject from "./Subject";

const SubjectList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const [data, setData] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/api/semester?departmentId=${user.departmentId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
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
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const isItemSelected = selectedItem === item;
          return (
            <TouchableOpacity onPress={() => setSelectedItem(item)}>
              <View style={[styles.listItem]}>
                <Text style={styles.itemTitle}> Sem {item.semesterNumber}</Text>
                <Text>
                  Duration: {item.duration} {item.durationType}
                </Text>
              </View>
              {isItemSelected && <Subject semester={item} />}
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={({ index }) => (
          <Separator index={index} length={data.length} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 22,
    paddingHorizontal: 16,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SubjectList;
