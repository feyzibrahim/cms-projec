import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, Pressable } from "react-native";
import { useAuthContext } from "../hooks/useAuthContext";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomDrawer = (props) => {
  const { logout } = useAuthContext();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <Pressable
          style={{
            backgroundColor: "#A38ED1",
            justifyContent: "center",
            alignItems: "center",
            elevation: 4,
            padding: 20,
          }}
          android_ripple={{
            color: "black",
          }}
          onPress={() => logout()}
        >
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="log-out-outline" size={22} />
            <Text style={{ textAlign: "center" }}>Log Out</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomDrawer;
