import axios from "axios";
import { BASE_URL } from "../../globalClasses/Config";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useAuthContext } from "../../hooks/useAuthContext";
import Loading from "../../globalClasses/Loading";

export default function TeacherProfile() {
  const { user } = useAuthContext();
  const [teacher, setTeacher] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/api/teacher/${user.dataAccessId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setTeacher(res.data);
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
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: "600" }}>
            Personal Information
          </Text>
          <Text style={{ fontSize: 15 }}>
            View your personal Details here. Not much to say just typed out some
            words...
          </Text>
          <View style={styles.styledView}>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Full Name
              </Text>
              <Text>{teacher && teacher.teacherName}</Text>
            </View>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Gender
              </Text>
              <Text>{teacher && teacher.gender}</Text>
            </View>
            <View style={styles.nonBorderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Date of Birth
              </Text>
              <Text>{teacher && teacher.dob}</Text>
            </View>
          </View>
          <View style={styles.styledView}>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Department
              </Text>
              <Text>{teacher && teacher.department}</Text>
            </View>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Designation
              </Text>
              <Text>{teacher && teacher.designation}</Text>
            </View>
            <View style={styles.nonBorderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Joining Date
              </Text>
              <Text>{teacher && teacher.joiningDate}</Text>
            </View>
          </View>
          <View style={styles.styledView}>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Email Id
              </Text>
              <Text>{teacher && teacher.email}</Text>
            </View>
            <View style={styles.nonBorderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Contact Number
              </Text>
              <Text>{teacher && teacher.facultyMobileNumber}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFDFDf",
    padding: 40,
  },
  borderRows: {
    borderBottomWidth: 3,
    borderBottomColor: "#DFDFDf",
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  nonBorderRows: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  styledView: {
    backgroundColor: "#fff",
    marginVertical: 15,
    borderRadius: 20,
  },
});
