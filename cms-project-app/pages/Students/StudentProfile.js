import axios from "axios";
import { BASE_URL } from "../../globalClasses/Config";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useAuthContext } from "../../hooks/useAuthContext";
import Loading from "../../globalClasses/Loading";
import moment from "moment";

export default function TeacherProfile() {
  const { user } = useAuthContext();
  const [student, setStudent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/api/student/${user.dataAccessId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setStudent(res.data);
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
          <View style={styles.styledView}>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Full Name
              </Text>
              <Text>{student && student.student_name}</Text>
            </View>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Registration Number
              </Text>
              <Text>{student && student.registrationNumber}</Text>
            </View>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Gender
              </Text>
              <Text>{student && student.gender}</Text>
            </View>
            <View style={styles.nonBorderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Date of Birth
              </Text>
              <Text>
                {student && moment(student.dob).format("dddd, DD/MM/yyyy")}
              </Text>
            </View>
          </View>
          <View style={styles.styledView}>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Department
              </Text>
              <Text>{student && student.department}</Text>
            </View>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Year
              </Text>
              <Text>{student && student.year}</Text>
            </View>
            <View style={styles.nonBorderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Joining Date
              </Text>
              <Text>
                {student &&
                  moment(student.joiningDate).format("dddd, DD/MM/yyyy")}
              </Text>
            </View>
          </View>
          <View style={styles.styledView}>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Email Id
              </Text>
              <Text>{student && student.email}</Text>
            </View>
            <View style={styles.nonBorderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Contact Number
              </Text>
              <Text>{student && student.mobileNumber}</Text>
            </View>
          </View>
          <View style={styles.styledView}>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Father Name
              </Text>
              <Text>{student && student.parents.father_name}</Text>
            </View>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Father Contact Number
              </Text>
              <Text>{student && student.parents.father_contact}</Text>
            </View>
            <View style={styles.borderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Mother Name
              </Text>
              <Text>{student && student.parents.mother_name}</Text>
            </View>
            <View style={styles.nonBorderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Mother Contact Number
              </Text>
              <Text>{student && student.parents.mother_contact}</Text>
            </View>
          </View>
          <View style={styles.styledView}>
            <View style={styles.nonBorderRows}>
              <Text
                style={{ fontSize: 16, fontWeight: "500", paddingVertical: 5 }}
              >
                Address
              </Text>
              <Text>{student && student.address.street}</Text>
              <Text>{student && student.address.city}</Text>
              <Text>{student && student.address.state}</Text>
              <Text>{student && student.address.pin}</Text>
              <Text>{student && student.address.country}</Text>
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
    paddingHorizontal: 40,
    paddingVertical: 20,
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
