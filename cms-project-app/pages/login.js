import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuthContext();

  const handleLogin = () => {
    if (email == "" || password == "") {
      alert("Please enter the details");
      return;
    }

    login(email, password);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.ecampusText}>ECAMPUS</Text>
      </View>
      <View style={styles.textInputView}>
        <TextInput
          placeholder="Enter your username/email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
      </View>
      <Text></Text>
      <View style={styles.textInputView}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>

      <View style={styles.signIn}>
        <Pressable
          style={styles.signInView}
          android_ripple={{
            color: "black",
          }}
          onPress={() => handleLogin()}
        >
          <Text style={styles.centerText}>Log In</Text>
        </Pressable>
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
