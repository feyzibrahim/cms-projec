import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TimetableList from "./TimetableList";
import { createStackNavigator } from "@react-navigation/stack";
import TimetableScreen from "./TimetableScreen";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const TTNavHome = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const today = new Date().getDay();
    if (today === 0 || today === 6) {
      setSelectedItem(null);
    } else {
      setSelectedItem(daysOfWeek[today - 1]);
    }
  }, []);

  const renderDay = ({ item }) => {
    const isItemSelected = selectedItem === item;
    return (
      <TouchableOpacity onPress={() => setSelectedItem(item)}>
        <View style={[styles.listItem, isItemSelected && styles.selectedItem]}>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>{item}</Text>
            {isItemSelected && <TimetableList day={item} />}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <FlatList
        data={daysOfWeek}
        renderItem={renderDay}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContainer}
        extraData={selectedItem}
      />
      <View style={{ margin: 20 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ttFullTT");
          }}
        >
          <Text
            style={{
              backgroundColor: "#A38ED1",
              paddingVertical: 20,
              paddingHorizontal: 20,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            View Full Time Table
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

const TTDayList = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ttDayList"
        component={TTNavHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ttFullTT"
        component={TimetableScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
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
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedItem: {
    backgroundColor: "#f0f0f0",
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemDetails: {
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 4,
  },
  itemDetailsText: {
    fontSize: 14,
    color: "#333",
    textAlign: "justify",
  },
  itemDate: {
    marginLeft: 12,
  },
  itemDateText: {
    fontSize: 12,
    color: "#888",
  },
});

export default TTDayList;
