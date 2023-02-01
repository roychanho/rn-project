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
      {/* <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          title: "Logout",
          drawerIcon: ({ color}) => (
            <IconButton
              icon="exit"
              color={color}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}

// const AuthenticatedDrawer = () => {
//   const authCtx = useContext(AuthContext);
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: Colors.primary500 },
//         headerTintColor: "white",
//         contentStyle: { backgroundColor: Colors.primary100 },
//       }}
//     >
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerRight: ({ tintColor }) => (
//             <IconButton
//               icon="exit"
//               color={tintColor}
//               size={24}
//               onPress={authCtx.logout}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// };
