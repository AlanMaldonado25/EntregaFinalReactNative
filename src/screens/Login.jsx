import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";
import { colors } from "../global/colors";
import { EvilIcons } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerSignin, result] = useLoginMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(result);
    if (result.data) {
      dispatch(setUser(result.data));
    }
  }, [result]);

  const onSubmit = () => {
    try {
      loginSchema.validateSync({ password, email });
      triggerSignin({ email, password });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Text style={styles.subtitle}>Login</Text>
      </View>
      <View>
        <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
        <InputForm
          label={"Password"}
          error={errorPassword}
          onChange={setPassword}
          isSecure={true}
        />
      </View>
      <View style={styles.submit}>
        {result.isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <SubmitButton title={"Login"} onPress={onSubmit} />
        )}
      </View>
      <View style={styles.containerRegister}>
        <Pressable
          onPress={() => navigation.navigate("Signup")}
          style={styles.btnRegister}
        >
          <Text style={styles.subtitle}>Registrarse</Text>
          <EvilIcons name="arrow-right" size={24} color={colors.ivory} />
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.jet,
    height: "100%",
    justifyContent: "space-around",
  },
  submit: {
    alignItems: "center",
  },
  subtitle: {
    fontSize: 30,
    color: colors.ivory,
  },
  btnRegister: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.avocado,
    width: "50%",
    borderRadius: 10,
    padding: 10,
  },
  containerRegister:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  }
});
