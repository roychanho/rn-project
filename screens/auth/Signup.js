import { Alert } from "react-native";
import React, { useContext, useState } from "react";
import AuthContent from "../../components/Auth/AuthContent";
import { AuthContext } from "../../store/authContext";
import LoadingOverlay from "../../components/Ui/LoadingOverlay";
import { createUser } from "../../util/auth";

const Signup = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create user check your input"
      );
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
};

export default Signup;
