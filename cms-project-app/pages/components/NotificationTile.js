// import { View } from "react-native/types";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useAuthContext } from "../hooks/useAuthContext";
// import { BASE_URL } from "../globalClasses/Config";

// export default function Ecampus() {
//   const { user } = useAuthContext();
//   const [notification, setNotification] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get(`${BASE_URL}/api/announcement`, {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       })
//       .then((res) => {
//         setNotification(res.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setIsLoading(false);
//       });
//   }, []);

//   return <View></View>;
// }
