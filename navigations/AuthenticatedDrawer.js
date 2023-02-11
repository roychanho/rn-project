import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import { AuthContext } from "../store/authContext";
import IconButton from "../components/Ui/IconButton";
import { View } from "react-native";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const authCtx = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="exit" color={color} size={size} />
        )}
        label="Logout"
        onPress={authCtx.logout}
      />
    </DrawerContentScrollView>
  );
}

export default function AuthenticatedDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        // headerStyle: { backgroundColor: "#351401" },
        sceneContainerStyle: { backgroundColor: "#D8D9CF" },
        // drawerContentStyle: { backgroundColor: "#D8D9CF" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#black",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "Home Page",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}