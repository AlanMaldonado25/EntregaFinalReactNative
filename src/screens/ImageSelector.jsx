import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/auth/authSlice";
import { usePostProfileImageMutation } from "../services/shopService";
import { colors } from "../global/colors";
import { Entypo } from '@expo/vector-icons';

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  const confirmImage = () => {
    dispatch(setCameraImage(image));
    triggerSaveProfileImage({ localId, image });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Pressable onPress={pickImage} style={styles.button}>
            <Text style={styles.text}>Take another photo</Text>
          </Pressable>
          <Pressable onPress={confirmImage} style={styles.button}>
            <Text style={styles.text}>Confirm photo</Text>
          </Pressable>
        </>
      ) : (
        <View style={styles.noPhotoContainer}>
          <Text style={styles.msg}>No photo to show...</Text>
          <Pressable onPress={pickImage}>
          <Entypo name="camera" size={35} color={colors.orange} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor:colors.jet,
  },
  image: {
    width: 200,
    height: 200,
  },
  noPhotoContainer: {
    width: 200,
    height: 200,
    borderWidth: 3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor:colors.orange,
  },
  msg:{
    color:colors.orange,
    fontSize:16
  },
  button:{
    backgroundColor:colors.orange,
    padding:5,
    borderRadius:5,

  },
  text:{
    fontSize:16,
    fontFamily:'Comforta',
    color:colors.jet,
    fontWeight:'bold'
  }
});
