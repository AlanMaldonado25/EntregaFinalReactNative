import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const SubmitButton = ({onPress, title}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.orange,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '60%'
    },
    text: {
        color: colors.jet,
        fontFamily: 'InterRegular',
        fontSize: 25,
        color:colors.jet
    },
});

