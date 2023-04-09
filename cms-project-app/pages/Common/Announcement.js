import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useAuthContext } from "../../hooks/useAuthContext";
import { BASE_URL } from "../../globalClasses/Config";
import moment from "moment";

export default function Announcement() {
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
      {isLoading && <Text>Loading...</Text>}
      {events &&
        events.map((item) => {
          return (
            <View key={item._id} style={styles.rowText}>
              <Text>{item.announcementTitle}</Text>
              <Text>{moment(item.createdAt).format("DD/MM/YYYY")}</Text>
            </View>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  eventText: {
    marginHorizontal: 20,
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
