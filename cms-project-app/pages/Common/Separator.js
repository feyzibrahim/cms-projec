import { View } from "react-native";

export default function Separator(props) {
  const { index, length } = props;

  if (index !== length - 1) {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }} />;
  } else {
    return null;
  }
}
