import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Internal({ navigation }) {
  const gotoNextPage = () => {
    navigation.navigate("studentsList");
  };

  const [sem, setSem] = useState([
    { sem: "SEM1", key: "1", color: "#9A85C9" },
    { sem: "SEM2", key: "2", color: "#A29AFF" },
    { sem: "SEM3", key: "3", color: "#CDC7DA" },
    { sem: "SEM4", key: "4", color: "#9A85C9" },
    { sem: "SEM5", key: "5", color: "#A29AFF" },
    { sem: "SEM6", key: "6", color: "#CDC7DA" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={sem}
        renderItem={({ item }) => (
          <View style={styles.subItem}>
            <TouchableOpacity onPress={gotoNextPage}>
              <View
                style={{
                  backgroundColor: item.color,
                  width: 300,
                  padding: 40,
                  marginBottom: 40,
                  borderRadius: 20,
                }}
              >
                <Text>{item.sem}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  subItem: {
    margin: 30,
  },
});
