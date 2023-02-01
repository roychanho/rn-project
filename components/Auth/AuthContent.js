import { Alert, StyleSheet, Text, View } from "react-native";
import Form from "./Form";
import FlatButton from "../Ui/FlatButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/styles";

const AuthContent = ({ isLoginPage, onAuthenticate }) => {
  const navigation = useNavigation();

  const [isInvalid, setIsInvalid] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const switchAuthModeHandler = () => {
    if (isLoginPage) {
      navigation.replace("Signup"); // with out the back button use replace same withe navigate
    } else {
      navigation.replace("Login");
    }
  };

  const submitHandler = (prev) => {
    let { email, password, confirmPassword } = prev;
    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLoginPage && !passwordsAreEqual)
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setIsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
    }
    onAuthenticate({ email, password });
  };

  return (
    <View style={styles.authContent}>
      <View>
        <Text style={styles.welcome}>Welcome</Text> 
      </View>
      <Form
        isLoginPage={isLoginPage}
        onSubmit={submitHandler}
        checkInvalid={isInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLoginPage ? "Create a new user" : "Log in instead"}
        </FlatButton>
      </View>
    </View>
  );
};

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  welcome:{
    textAlign: "center",
    marginVertical: 40,
    marginBottom: 64,
    fontSize: 32,
  },
  buttons: {
    marginTop: 8,
  },
});
