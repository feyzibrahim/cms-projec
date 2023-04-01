import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function StudentsList({ navigation }) {
  const gotomarksheetpage = () => {
    navigation.navigate("Studentmarksheet");
  };

  const [sem, setSem] = useState([
    { sem: "Faiz", key: "1" },
    { sem: "Ahalya", key: "2" },
    { sem: "Vafa", key: "3" },
    { sem: "Bazi", key: "4" },
    { sem: "Donu", key: "5" },
    { sem: "Linto", key: "6" },
    { sem: "Ansila", key: "7" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={sem}
        renderItem={({ item }) => (
          <View style={styles.subItem}>
            <TouchableOpacity onPress={gotomarksheetpage}>
              <View
                style={{
                  marginVertical: 10,
                  borderBottomColor: "#000",
                  borderBottomWidth: 2,
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
