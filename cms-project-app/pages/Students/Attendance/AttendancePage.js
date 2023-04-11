import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../globalClasses/Config";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Loading from "../../../globalClasses/Loading";
import moment from "moment";
import Separator from "../../Common/Separator";
import PeriodRow from "./PeriodRow";

export default function AttendancePage({ route }) {
  const { item } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const [data, setData] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const loadData = () => {
    setIsLoading(true);
    axios
      .get(
        `${BASE_URL}/api/attendance/${user.dataAccessId}/${item.value}/dates`,
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
  };

  useEffect(() => {
    loadData();
  }, []);

  const [isRefreshing, setIsRefreshing] = useState(false);

  function handleRefresh() {
    setIsRefreshing(true);

    loadData();
    setIsRefreshing(false);
  }

  function handleScroll(event) {
    const { contentOffset } = event.nativeEvent;
    if (contentOffset.y < -100) {
      handleRefresh();
    }
  }

  const renderItem = ({ item }) => {
    const isItemSelected = selectedItem === item;
    return (
      <TouchableOpacity onPress={() => setSelectedItem(item)}>
        <View style={[styles.listItem]}>
          <Text style={styles.itemTitle}>
            {moment(item.date).format("dddd, DD/MM/yyyy")}
          </Text>
          <Text>{item.present}/5</Text>
        </View>
        {isItemSelected && <PeriodRow date={item.date} />}
      </TouchableOpacity>
    );
  };

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
        renderItem={renderItem}
        keyExtractor={(item) => item.index}
        contentContainerStyle={styles.listContainer}
        onScroll={handleScroll}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        ItemSeparatorComponent={({ index }) => (
          <Separator index={index} list={data.length} />
        )}
      />
    </View>
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
    justifyContent: "space-between",
    paddingVertical: 22,
    paddingHorizontal: 16,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
