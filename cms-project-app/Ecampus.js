import { StyleSheet, Text, View } from "react-native";

export default function Ecampus(item) {
  return (
    <View>
      <Text style={styles.camp}>ECAMPUS</Text>
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

  camp: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
