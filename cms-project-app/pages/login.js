import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";

export default function Login({ navigation }) {
  const gotomainpage = () => {
    navigation.navigate("students");
  };
  const gototeacberpage = () => {
    navigation.navigate("Teacher");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.ecampusText}>ECAMPUS</Text>
      </View>
      <View style={styles.textInputView}>
        <TextInput placeholder="Enter your username" />
      </View>

      <View style={styles.textInputView}>
        <TextInput placeholder="Password" />
      </View>

      <View style={styles.signIn}>
        <Pressable
          style={styles.signInView}
          android_ripple={{
            color: "black",
          }}
          onPress={() => gotomainpage()}
        >
          <Text style={styles.centerText}>Log In</Text>
        </Pressable>
      </View>
      <View style={styles.signIn}>
        <Pressable
          style={styles.signInView}
          android_ripple={{
            color: "black",
          }}
          onPress={() => gototeacberpage()}
        >
          <Text style={styles.centerText}>Go to teachers main page</Text>
        </Pressable>
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
    backgroundColor: "#A38ED1",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    padding: 20,
  },
  signIn: {
    overflow: "hidden",
    alignSelf: "stretch",
    margin: 30,
    borderRadius: 10,
  },
  ecampusText: {
    fontWeight: "900",
    fontSize: 50,
  },
  centerText: {
    alignSelf: "center",
    color: "#fff",
  },
});
