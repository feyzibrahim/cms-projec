import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function Login({ navigation }) {
  const gotomainpage = () => {
    navigation.navigate("students");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.ecampusText}>ECAMPUS</Text>
      </View>
      <View style={styles.textInputView}>
        <TextInput placeholder="enter your username " />
      </View>

      <View style={styles.textInputView}>
        <TextInput placeholder="Password" />
      </View>

      <View style={styles.signInView}>
        <TouchableOpacity onPress={gotomainpage}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text> or continue with</Text>
      </View>

      <View styles={styles.registerButton}>
        <Text>Not a memember? register now</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFDFDf",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    paddingHorizontal: 30,
  },
  textInputView: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    margin: 30,
    alignSelf: "stretch",
  },
  signInView: {
    backgroundColor: "#553893",
    padding: 15,
    alignSelf: "stretch",
    margin: 30,
    borderRadius: 10,
  },
  signInText: {
    textAlign: "center",
  },
  pass: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 40,
  },
  ecampusText: {
    fontWeight: "900",
    fontSize: 50,
  },
});
