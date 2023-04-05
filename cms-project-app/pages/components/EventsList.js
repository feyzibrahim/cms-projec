import axios from "axios";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useAuthContext } from "../../hooks/useAuthContext";
import { BASE_URL } from "../../globalClasses/Config";

export default function EventsList() {
  const { user } = useAuthContext();
  const [events, setEvents] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/api/event?q=` + user.collegeId, {
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
    <View>
      <Text>Events</Text>
      {isLoading && <Text>Loading...</Text>}
      {events &&
        events.map((item) => {
          return <Text key={item._id}>{item.eventName}</Text>;
        })}
    </View>
  );
}
