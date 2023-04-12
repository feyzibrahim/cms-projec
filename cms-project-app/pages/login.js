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
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.iconContainer}
        >
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={24}
            color="#888"
          />
        </TouchableOpacity>
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#888",
    marginBottom: 16,
    margin: 30,
  },
  input: {
    flex: 1,
    height: 40,
  },
  iconContainer: {
    padding: 8,
  },

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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
