import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useAuthContext } from "../../hooks/useAuthContext";
import { BASE_URL } from "../../globalClasses/Config";

export default function AnnouncementList() {
  const { user } = useAuthContext();
  const [events, setEvents] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/api/announcement?q=` + user.collegeId, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setEvents(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <View style={styles.eventText}>
      <Text style={styles.title}>Announcement</Text>
      {isLoading && <Text>Loading...</Text>}
      {events &&
        events.map((item) => {
          return (
            <Text key={item._id} style={styles.rowText}>
              {item.announcementTitle}
            </Text>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  eventText: {
    marginHorizontal: 20,
    backgroundColor: "#999",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
  },
  rowText: {
    borderBottomColor: "#888",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
});
