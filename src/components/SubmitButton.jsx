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
        width: '60%',
        elevation:5,
        shadowColor:colors.jet,
        shadowRadius:8,
        shadowOpacity:0.8,

    },
    text: {
        color: colors.jet,
        fontFamily: 'InterRegular',
        fontSize: 25,
        color:colors.jet,
        fontFamily:'Comforta'
    },
});

