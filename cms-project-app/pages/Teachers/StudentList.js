import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import axios from "axios";
import { BASE_URL } from "../../globalClasses/Config";
import { useAuthContext } from "../../hooks/useAuthContext";
import Loading from "../../globalClasses/Loading";
import Separator from "../Common/Separator";

export default function StudentList({ route }) {
  const { year } = route.params;

  const { user } = useAuthContext();
  const [students, setStudents] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const loadData = () => {
    console.log(year);
    setIsLoading(true);
    axios
      .get(
        `${BASE_URL}/api/student?departmentId=${user.departmentId}&year=${year}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        setStudents(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {students != null ? (
        <View style={styles.container}>
          <FlatList
            data={students}
            keyExtractor={(item) => item._id}
            ItemSeparatorComponent={({ index }) => (
              <Separator index={index} length={students.length} />
            )}
            // extraData={searchQuery}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.subItem}>
                  <Text>{item.student_name}</Text>
                  <Text>{item.mobileNumber}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <View style={styles.emptyMsg}>
          <Text>Students are empty</Text>
          <Text>Please ask college admin to add students</Text>
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
