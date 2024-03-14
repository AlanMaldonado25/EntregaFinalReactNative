import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";

const InputForm = ({ label, error, onChange, isSecure }) => {
  const [input, setInput] = useState("");

  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom:15,

  },
  label: {
    width: "90%",
    fontSize: 25,
    fontFamily:'Comforta',
    color:colors.jet,
    marginVertical:5,
  },
  error: {
    fontSize: 20,
    color: colors.vermillion,
    fontFamily:'Comforta',
    fontStyle: "italic",
    marginTop:10,
  },
  input: {
    width: "90%",
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: colors.jet,
    padding: 2,
    fontFamily:'Comforta',
    fontSize: 20,
    color:colors.ivory
  },
});
