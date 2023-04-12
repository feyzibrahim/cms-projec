import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";
import Loading from "../../../globalClasses/Loading";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { BASE_URL } from "../../../globalClasses/Config";
import Separator from "../../Common/Separator";

export default function InternalMark({ navigation }) {
  const [internals, setInternals] = useState();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/api/internalExam/teacher/${user.dataAccessId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setInternals(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={styles.VerticalScroll}>
      <FlatList
        data={internals}
        ItemSeparatorComponent={({ index }) => (
          <Separator index={index} list={internals.length} />
        )}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View style={styles.subjectView}>
                <View>
                  <Text style={styles.subTitle}>{item.subject.name}</Text>
                  <Text>{item.examType}</Text>
                </View>
                <View>
                  <Text style={{ textAlign: "right" }}>
                    Marks Scored: {item.marks}
                  </Text>
                  <Text style={{ textAlign: "right" }}>
                    Out of: {item.maxMarks}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View style={{ margin: 20 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreateInternals");
          }}
        >
          <Text
            style={{
              backgroundColor: "#A38ED1",
              paddingVertical: 20,
              paddingHorizontal: 20,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            Add New Internal Mark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  VerticalScroll: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    flex: 1,
    justifyContent: "space-between",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subjectView: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
});
