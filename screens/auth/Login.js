import { Alert } from "react-native";
import React, { useContext, useState } from "react";
import AuthContent from "../../components/Auth/AuthContent";
import LoadingOverlay from "../../components/Ui/LoadingOverlay";
import { AuthContext } from "../../store/authContext";
import { login } from "../../util/auth";

const Login = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Authentication failed", "could not log you in.");
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLoginPage onAuthenticate={loginHandler} />;
};

export default Login;
