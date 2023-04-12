import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { BASE_URL } from "../../../globalClasses/Config";
import { useAuthContext } from "../../../hooks/useAuthContext";

const InternalForm = () => {
  const { user } = useAuthContext();

  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const teacher = user.dataAccessId;
  const [marks, setMarks] = useState("");
  const [maxMarks, setMaxMarks] = useState("");
  const [examType, setExamType] = useState("");

  const [semesterList, setSemesterList] = useState([
    { _id: 1, name: "Loading....", value: "0000" },
  ]);

  const [subjectList, setSubjectList] = useState([
    { _id: 1, name: "Loading....", value: "0000" },
  ]);
  const [examTypeList, setExamTypeList] = useState([
    { _id: 1, name: "Term 1", value: "Term 1" },
    { _id: 2, name: "Term 2", value: "Term 2" },
  ]);

  const loadSemester = () => {
    axios
      .get(`${BASE_URL}/api/semester?departmentId=${user.departmentId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    loadSemester();
    //   axios
    //     .get(`${BASE_URL}/api/subject/dep/${user.departmentId}`, {
    //       headers: {
    //         Authorization: `Bearer ${user.token}`,
    //       },
    //     })
    //     .then((response) => {
    //       setSubjectList(response.data.subjects);
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      semester,
      subject,
      teacher,
      marks,
      maxMarks,
      examType,
    };

    console.log(formData);

    axios
      .post(`${BASE_URL}/api/internals`, formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        console.log("Success:", response.data);
        setSemester("");
        setSubject("");
        setSubject("");
        setSemester("");
        setMaxMarks("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Semester:</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={semester}
          onValueChange={(itemValue) => setSemester(itemValue)}
          placeholder="Select Subject"
        >
          {semesterList.map((s) => (
            <Picker.Item key={s._id} label={s.semesterNumber} value={s._id} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Subject:</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={subject}
          onValueChange={(itemValue) => setSubject(itemValue)}
          placeholder="Select Subject"
        >
          {subjectList.map((s) => (
            <Picker.Item key={s._id} label={s.name} value={s._id} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Marks:</Text>
      <TextInput
        style={styles.input}
        value={marks}
        onChangeText={(text) => setMarks(text)}
        placeholder="Enter Marks"
      />

      <Text style={styles.label}>Maximum Marks:</Text>
      <TextInput
        style={styles.input}
        value={maxMarks}
        onChangeText={(text) => setMaxMarks(text)}
        placeholder="Enter Marks"
      />

      <Text style={styles.label}>Term:</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={examType}
          onValueChange={(itemValue) => setExamType(itemValue)}
          placeholder="Select Subject"
        >
          {examTypeList.map((s) => (
            <Picker.Item key={s._id} label={s.name} value={s._id} />
          ))}
        </Picker>
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

export default InternalForm;
