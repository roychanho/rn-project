import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import AuthContextProvider, { AuthContext } from "./store/authContext";
import ExpensesContextProvider from "./store/expensesContext";

import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import AuthStack from "./navigations/AuthStack";
import AuthenticatedDrawer from "./navigations/AuthenticatedDrawer";

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedDrawer />}
    </NavigationContainer>
  );
};

const Root = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token"); //get key

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <ExpensesContextProvider>
          <Root />
        </ExpensesContextProvider>
      </AuthContextProvider>
    </>
  );
}
