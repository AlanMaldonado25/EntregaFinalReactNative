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
        <View style={styles.containerSubtitle}>
          <Text style={styles.subtitle}>Login<EvilIcons name="arrow-down" size={30} /></Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Signup")}
          style={styles.btnRegister}
        >
          <Text style={styles.subtitle}>Registrarse<EvilIcons name="arrow-right" size={30} color={colors.ivory} /></Text>

        </Pressable>
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
        </View>
        <View style={styles.submit}>
          {result.isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <SubmitButton title={"Login"} onPress={onSubmit} />
          )}
        </View>
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
    marginHorizontal: 5
  },
  containerForm: {
    justifyContent: 'space-around',
    backgroundColor: colors.avocado,
    height: '80%',
    marginHorizontal: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    backgroundColor: colors.jet,
    gap: 0,
    padding: 30,
    height: '100%'
  },
  submit: {
    alignItems: "center",
  },
  subtitle: {
    fontSize: 30,
    color: colors.ivory,
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnRegister: {
    width: '50%',
    justifyContent: 'center',
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
    alignItems: 'center'
  }
});
