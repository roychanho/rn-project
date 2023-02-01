import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "../Ui/Button";

const Form = ({ isLoginPage, onSubmit, checkInvalid }) => {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterPassword, setEnterPassword] = useState("");
  const [enterConfirmPassword, setEnterConfirmPassword] = useState("");

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordNotMatch,
  } = checkInvalid;

  const updateInputValueHandler = (inputType, enterValue) => {
    switch (inputType) {
      case "email":
        setEnterEmail(enterValue);
        break;
      case "password":
        setEnterPassword(enterValue);
        break;
      case "confirmPassword":
        setEnterConfirmPassword(enterValue);
        break;
    }
  };

  const submitHandler = () => {
    onSubmit({
      email: enterEmail,
      password: enterPassword,
      confirmPassword: enterConfirmPassword,
    });
  };

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Email Address"
          value={enterEmail}
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />
        <Input
          label="Password"
          value={enterPassword}
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          secure
          isInvalid={passwordIsInvalid}
        />
        {!isLoginPage && (
          <Input
            label="Confirm Password"
            value={enterConfirmPassword}
            onUpdateValue={updateInputValueHandler.bind(this, "confirmPassword")}
            secure
            isInvalid={passwordNotMatch}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLoginPage ? "Login" : "Signup"}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
