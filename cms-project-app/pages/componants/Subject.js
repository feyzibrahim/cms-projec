import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Subject(item) {
  return (
    <View>
      <TouchableOpacity>
        <Text>{item.sub}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFDFDf",
    alignItems: "center",
    justifyContent: "center",
  },
});
