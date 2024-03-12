import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authService";
import SubmitButton from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import { colors } from '../global/colors';
import { EvilIcons } from "@expo/vector-icons";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  //console.log(result)

  const onSubmit = () => {
    console.log("mail", errorMail);
    console.log("password", errorPassword);
    console.log("confirmPassword", errorConfirmPassword);

    try {
      //limpiamos los errores cada vez que ejecutamos el Register
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");

      signupSchema.validateSync({ password, confirmPassword, email });
      triggerSignup({ email, password });
      console.log("Registro exitoso");
    } catch (err) {
      console.log("path", err.path);
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        case "confirmPassword":
          setErrorConfirmPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Pressable onPress={() => navigation.navigate("Login")} style={styles.btnLogin}>
          <Text style={styles.subtitle}>Login<EvilIcons name="arrow-left" size={30} color={colors.ivory} /></Text>
        </Pressable>
        <View style={styles.containerSubtitle}>
          <Text style={styles.subtitle}>Registrarse<EvilIcons name="arrow-down" size={30} /></Text>
        </View>
      </View>
      <View style={styles.containerForm}>
        <View>
          <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
          <InputForm
            label={"Password"}
            error={errorPassword}
            onChange={setPassword}
            isSecure={true}
          />
          <InputForm
            label={"Confirm password"}
            error={errorConfirmPassword}
            onChange={setConfirmPassword}
            isSecure={true}
          />
        </View>
        <View style={styles.submit}>
          <SubmitButton title={"Register"} onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.jet,
    gap: 0,
    padding: 30,
    height: '100%'
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 5
  },
  containerForm: {
    justifyContent: 'space-around',
    backgroundColor: colors.avocado,
    height: '80%',
    marginHorizontal: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  submit: {
    alignItems: 'center'
  },
  subtitle: {
    fontSize: 30,
    color: colors.ivory,
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerSubtitle: {
    backgroundColor: colors.avocado,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
  },
  btnLogin: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
