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
  const [Mark, setMark] = useState([
    { sub: "maths", internal: "14", external: "60", maxinternal: "15" },
    { sub: "statitics", internal: "13", external: "60", maxinternal: "20" },
    { sub: "c programming", internal: "14", external: "60", maxinternal: "15" },
  ]);
  return (
    <FlatList>
      data={Mark}
      renderItem=
      {({ item }) => (
        <View style={styles.marksheet}>
          <TouchableOpacity>
            <View>
              <Text>{item.sub}</Text>
              <Text>{item.internal}</Text>
              <Text>{item.maxinternal}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </FlatList>
  );
}
const styles = StyleSheet.create({});
