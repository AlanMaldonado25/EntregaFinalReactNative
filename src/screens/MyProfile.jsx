import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

const MyProfile = ({ navigation }) => {
  const { profileImage, imageCamera } = useSelector((state) => state.authReducer.value);
  return (
    <View style={styles.container}>
      {profileImage || imageCamera ? (
        <Image
          source={{ uri: profileImage || imageCamera }}
          resizeMode="cover"
          style={styles.image}
        />
      ) : (
        <>
          <Image
            source={require("../../assets/defaultProfile.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </>
      )}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Image Selector")}
      >
        <Text style={styles.text}>Add profile picture</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Location Selector")}
      >
        <Text style={styles.text}>My addresses</Text>
      </Pressable>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor:colors.jet,
    height:'100%'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius:10
  },
  button: {
    width: "80%",
    elevation: 10,
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius:10
  },
  text: {
    fontFamily: 'Comforta',
    fontSize: 18,
    color: colors.jet,
    fontWeight:'bold'
  },
});
