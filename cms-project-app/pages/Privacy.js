import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Privacy() {
  return (
    <View>
      <View style={styles.about}>
        <Text style={styles.main}>Privacy</Text>
      </View>
      <View>
        <Text style={styles.test}>
          Last updated: February 28, 2023 This Privacy Policy describes Our
          policies and procedures on the collection, use and disclosure of Your
          information when You use the Service and tells You about Your privacy
          rights and how the law protects You.
        </Text>
      </View>
      <View>
        <Text style={styles.policy}>Policy</Text>
        <Text style={styles.policysub}>
          Account means a unique account created for You to access our Service
          or parts of our Service Company (referred to as either "the Company",
          "We", "Us" or "Our" in this Agreement) refers to ecampus.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  about: {
    // backgroundColor: "#A38ED1",
    paddingVertical: 10,
    flexDirection: "row",
    paddingLeft: 50,
    // borderRadius: 40,
    // margin: 50,
    // marginLeft: 10,
  },
  main: {
    fontSize: 20,
    textAlign: "center",
  },
  test: {
    padding: 20,
    lineHeight: 50,
    marginLeft: 30,
  },
  policy: {
    fontSize: 20,
    marginLeft: 30,
  },
  policysub: {
    lineHeight: 50,
    marginLeft: 30,
    padding: 20,
  },
});
