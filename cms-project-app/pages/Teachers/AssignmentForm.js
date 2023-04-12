import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { BASE_URL } from "../../globalClasses/Config";
import { useAuthContext } from "../../hooks/useAuthContext";
import CalendarPicker from "react-native-calendar-picker";

const AssignmentForm = () => {
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [dueDate, setDueDate] = useState(new Date());

  const [data, setData] = useState([{ name: "Loading....", value: "0000" }]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/subject/dep/${user.departmentId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setData(response.data.subjects);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const teacher = user.dataAccessId;
    const semester = "643432e2599ccaa0f668f0b5";
    const formData = {
      title,
      description,
      subject,
      semester,
      dueDate,
      teacher,
    };

    console.log(formData);

    axios
      .post(`${BASE_URL}/api/assignments`, formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        console.log("Success:", response.data);
        setTitle("");
        setDescription("");
        setSubject("");
        setSemester("");
        setDueDate("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="Enter Title"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="Enter Description"
      />

      <Text style={styles.label}>Subject:</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={subject}
          onValueChange={(itemValue) => setSubject(itemValue)}
          style={styles.input}
        >
          {data.map((s) => (
            <Picker.Item key={s._id} label={s.name} value={s._id} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Semester:</Text>
      <TextInput
        style={styles.input}
        value={semester}
        onChangeText={(text) => setSemester(text)}
        placeholder="Enter Semester Number"
      />

      <Text style={styles.label}>Due Date:</Text>
      <View>
        <CalendarPicker onDateChange={(date) => setDueDate(date)} />
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

export default AssignmentForm;
