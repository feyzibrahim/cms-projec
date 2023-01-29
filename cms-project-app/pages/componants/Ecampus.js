import { StyleSheet, Text, View } from "react-native";

export default function Ecampus(item) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ECAMPUS</Text>
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
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
