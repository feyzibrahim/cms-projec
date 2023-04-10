import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AttendancePage from "./AttendancePage";
import SemRows from "./SemRows";

const data = [
  { label: "Sem 1", value: 1 },
  { label: "Sem 2", value: 2 },
  { label: "Sem 3", value: 3 },
  { label: "Sem 4", value: 4 },
  { label: "Sem 5", value: 5 },
  { label: "Sem 6", value: 6 },
];

const Sem = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <SemRows item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.value}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const SemList = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="semList"
        component={Sem}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AttendancePage"
        component={AttendancePage}
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
});

export default SemList;
