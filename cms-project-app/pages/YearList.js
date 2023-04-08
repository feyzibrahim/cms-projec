import axios from "axios";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BASE_URL } from "../globalClasses/Config";
import { useAuthContext } from "../hooks/useAuthContext";
import Loading from "../globalClasses/Loading";

export default function YearList({ navigation }) {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState();
  const [yearButtons, setYearButtons] = useState([]);

  const gotoNextPage = (year) => {
    navigation.navigate("yearStudents", year);
  };

  const loadData = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/api/department/${user.departmentId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setIsLoading(false);
        handleYearList(res.data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const handleYearList = (department) => {
    const newCom = [];
    for (let i = 0; i < department.year_count; i++) {
      const yearButton = (
        <TouchableOpacity key={i} onPress={gotoNextPage(year)}>
          <View style={styles.yearButton}>
            <Text style={styles.yearText}>Year {i + 1}</Text>
          </View>
        </TouchableOpacity>
      );
      newCom.push(yearButton);
    }
    setYearButtons(newCom);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Year</Text>
      {yearButtons}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
  },
  yearButton: {
    paddingVertical: 50,
    paddingHorizontal: 100,
    backgroundColor: "#777",
    marginBottom: 10,
    borderRadius: 10,
  },
  yearText: {
    fontSize: 20,
    color: "#fff",
  },
});
