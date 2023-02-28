import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Terms() {
  return (
    <View>
      <View style={styles.term}>
        <Text style={styles.conditions}>Terms and Condition</Text>
      </View>
      <View>
        <Text style={styles.mainsub}>Welcome to E_CAMPUS!</Text>
        <Text style={styles.sub}>
          These terms and conditions outline the rules and regulations use of
          E-Campus's app, located at app.com. By accessing this app we assume
          you accept these terms and conditions. Do not continue to use E-Camups
          if you do not agree to take all of the terms and conditions stated on
          this page The following terminology applies to these Terms and
          Conditions, Privacy Statement and Disclaimer Notice and all
          Agreements: “Client”,
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  term: {
    // backgroundColor: "#A38ED1",
    paddingVertical: 30,
    marginLeft: 40,
  },
  conditions: {
    fontSize: 20,
    textAlign: "auto",
  },
  sub: {
    lineHeight: 50,
    marginLeft: 40,
    marginRight: 20,
    padding: 10,
  },
  mainsub: {
    fontWeight: "800",
    marginLeft: 20,
  },
});
