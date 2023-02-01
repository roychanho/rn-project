import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Expenses from "../screens/expenses/Expenses";

import IconButton from "../components/Ui/IconButton";

const Tab = createBottomTabNavigator();

export default function BottomTapNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        // headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        // headerTintColor: "white",
        // tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        // tabBarActiveTintColor: GlobalStyles.colors.accent500,
        // headerRight: ({ tintColor }) => (
        //   <IconButton
        //     icon="add"
        //     size={24}
        //     color={tintColor}
        //     onPress={() => {
        //       navigation.navigate("ManageExpense");
        //     }}
        //   />
        // ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Expenses"
        component={Expenses}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{
          tabBarVisible: false,
          tabBarButton: () => null,
          presentation: "modal",
        }}
      /> */}
    </Tab.Navigator>
  );
}
