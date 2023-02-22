import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
export default function StudentMarksheet() {
  const [mark, setMark] = useState([
    { sub: "maths", internal: "14", external: "60", maxinternal: "15" },
    { sub: "statitics", internal: "13", external: "60", maxinternal: "20" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
  ]);
  return (
    <View>
      <FlatList
        data={mark}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.marksheet}>
              <Text>Subject: {item.sub}</Text>
              <Text>
                Internal: {item.internal}/{item.maxinternal}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  marksheet: {
    // backgroundColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    borderColor: "#ccc",
    borderBottomWidth: 2,
  },
});
