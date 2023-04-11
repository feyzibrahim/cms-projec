import React, { useState } from "react";
import { Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import DepTeachers from "../Teachers/DepTeachers";
import CollegeTeachers from "../Teachers/CollegeTeachers";

const renderScene = SceneMap({
  department: DepTeachers,
  college: CollegeTeachers,
});

export default function TeacherList() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "department", title: "Department" },
    { key: "college", title: "College" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "black" }}
      style={{ backgroundColor: "white" }}
      labelStyle={{ color: "black" }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get("window").width }}
      renderTabBar={renderTabBar}
    />
  );
}
