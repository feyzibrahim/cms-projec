import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Setting({ navigation }) {
  const [setting, setSetting] = useState([
    { data: "privacy Policy", name: "privacypolicy", key: "1" },
    { data: "terms and condition", name: "termsandconditions", key: "2" },
    { data: "Help", name: "help", key: "3" },
    { data: "Log Out", name: "logout", key: "4" },
  ]);
  return (
    <View>
      <View style={styles.settingsheet}>
        <MaterialIcons name="settings" size={30} />
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
              <View style={styles.datasheet}>
                <Text>{item.data}</Text>
              </View>
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
    paddingVertical: 40,
    flexDirection: "row",
    paddingLeft: 50,
    marginRight: 5,
  },
  changeset: {
    fontSize: 20,
    fontWeight: "normal",
    textAlign: "center",
    marginLeft: 20,
    paddingRight: 40,
  },
  datasheet: {
    padding: 30,
    // backgroundColor: "#DFDFDf",
    marginRight: 5,
    padding: 20,
  },
});
