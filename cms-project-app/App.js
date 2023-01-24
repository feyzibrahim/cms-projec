import { StyleSheet, View } from "react-native";
// import Sub from "./Sub";
// import Login from "./Login";
import Homepage from "./Homepage";
// import Attendence from "./Attendence";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Sub /> */}
      <Homepage />
      {/* <Attendence /> */}

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
