import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Internal() {
  const [sem, setSem] = useState([
    "sem1",
    "sem2",
    "sem3",
    "sem4",
    "sem5",
    "sem6",
  ]);

  return (
    <View style={styles.container}>
      <Text>heeee</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
