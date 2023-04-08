import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import { BASE_URL } from "../globalClasses/Config";
import { useAuthContext } from "../hooks/useAuthContext";
import Loading from "../globalClasses/Loading";

// export default function CollegeTeachers({ navigation }) {
export default function CollegeTeachers() {
  const { user } = useAuthContext();
  const [teachers, setTeachers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const loadData = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/api/teacher?fromMob=` + user.collegeId, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setTeachers(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const Separator = () => {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }} />;
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {teachers != null ? (
        <View style={styles.container}>
          <FlatList
            data={teachers}
            keyExtractor={(item) => item._id}
            ItemSeparatorComponent={({ index }) => {
              if (index !== teachers.length - 1) {
                return <Separator />;
              } else {
                return null;
              }
            }}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.subItem}>
                  <Text>{item.teacherName}</Text>
                  <Text>{item.registrationNumber}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <View style={styles.emptyMsg}>
          <Text>Students are empty</Text>
          <Text>Please ask college admin to add teachers</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  subItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  container: {
    // padding: 10,
  },
  title: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "600",
  },
  emptyMsg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
