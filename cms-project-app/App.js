import { StyleSheet, View, Text } from "react-native";
import Profile from "./pages/login";

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFDFDf",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
