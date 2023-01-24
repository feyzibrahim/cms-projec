import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function Homepage() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.ecamphello}> */}
      <View>
        <Text style={styles.ecamp}>Ecampus</Text>
      </View>

      <View>
        <Text styles={styles.count}>Hello,Sir/Madam</Text>
        {/* </View> */}
      </View>

      <View style={styles.sub}>
        <TouchableOpacity>
          <Text>java</Text>
          <Text>09:00-10:00</Text>
        </TouchableOpacity>
        <View style={styles.div1}>
          <TouchableOpacity>
            <Text>teacher:neethu</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.due}>
        <View>
          <Text styles={styles.damn}>Due work</Text>
        </View>
        <View>
          <Text>View all</Text>
        </View>
      </View>

      <View style={styles.teach}>
        <TouchableOpacity>
          <Text>php programming</Text>
          <Text>2 day left</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.markandinternal}>
        <View style={styles.intern}>
          <TouchableOpacity>
            <Text>ADD internals</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.attend}>
          <TouchableOpacity>
            <Text>MARK attendence</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFDFDf",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    width: Dimensions.get("window").width,
    margin: 20,
  },
  sub: {
    backgroundColor: "#553893",
    padding: 40,
    margin: 40,
    borderRadius: 10,
    alignSelf: "stretch",
  },
  teach: {
    backgroundColor: "#553893",
    padding: 50,
    margin: 50,
    borderRadius: 10,
  },
  damn: {
    margin: 40,
  },
  intern: {
    backgroundColor: "#553893",
    padding: 20,
    margin: 30,
  },
  count: {
    fontSize: 60,
    fontWeight: "900",
  },
  attend: {
    backgroundColor: "#553893",
    padding: 20,
    margin: 30,
  },
  div1: {
    backgroundColor: "pink",
    padding: 10,
    margin: 30,
    borderRadius: 10,
    alignSelf: "stretch",
  },
  markandinternal: {
    flexDirection: "row",
  },
  due: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",
  },
  // ecamphello: {
  // padding: 30,
  // margin: 40,
  // justifyContent: "space-between",
  // },
  ecamp: {
    fontWeight: "bold",
  },
});
