import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Setting({ navigation }) {
  const [setting, setSetting] = useState([
    { data: "Notification", name: "notification", key: "1" },
    { data: "privacy Policy", name: "privacypolicy", key: "2" },
    { data: "terms and condition", name: "termsandconditions", key: "3" },
    { data: "About us", name: "aboutus", key: "4" },
    { data: "Help", name: "help", key: "5" },
    { data: "Support", name: "support", key: "6" },
    { data: "Log Out", name: "logout", key: "7" },
  ]);
  return (
    <View>
      <View style={styles.settingsheet}>
        <Text style={styles.changeset}>Settings</Text>
      </View>
      <View style={styles.main}>
        <FlatList
          data={setting}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                const str = item.name;
                navigation.navigate(str);
              }}
            >
              <Text style={styles.datasheet}>{item.data}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  settingsheet: {
    backgroundColor: "#A38ED1",
    paddingVertical: 55,
  },
  changeset: {
    fontSize: 20,
    fontWeight: "normal",
    textAlign: "left",
    marginLeft: 20,
  },
  datasheet: {
    padding: 30,
    backgroundColor: "#DFDFDf",
  },
});
