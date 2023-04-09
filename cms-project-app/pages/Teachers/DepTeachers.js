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
import Ionicons from "react-native-vector-icons/Ionicons";
import Separator from "../Common/Separator";

// export default function DepTeachers({ navigation }) {
export default function DepTeachers() {
  const { user } = useAuthContext();
  const [teachers, setTeachers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // const [isFocused, setIsFocused] = useState(false);

  // const handleFocus = () => setIsFocused(true);
  // const handleBlur = () => setIsFocused(false);

  // const borderColor = isFocused ? "#777" : "#ccc";

  // const [searchQuery, setSearchQuery] = useState('');

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  // };

  const loadData = () => {
    setIsLoading(true);
    axios
      .get(
        `${BASE_URL}/api/teacher?q=` +
          user.collegeId +
          "&departmentId=" +
          user.departmentId,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
          marginHorizontal: 20,
          borderColor: borderColor,
          borderWidth: 1,
          borderRadius: 10,
        }}
      >
        <Ionicons
          name="search-outline"
          size={22}
          color={borderColor}
          style={{ paddingLeft: 5 }}
        />
        <TextInput
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearch}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            width: "90%",
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          b
        />
      </View> */}
      {teachers != null ? (
        <View style={styles.container}>
          <FlatList
            data={teachers}
            keyExtractor={(item) => item._id}
            ItemSeparatorComponent={({ index }) => (
              <Separator index={index} length={teachers.length} />
            )}
            // extraData={searchQuery}
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
