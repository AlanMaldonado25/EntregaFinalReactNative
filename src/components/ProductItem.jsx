import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Card from "./Card";
import { colors } from '../global/colors'

const ProductItem = ({ product, navigation }) => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  const { width, height } = useWindowDimensions();

  console.log(width, height);

  useEffect(() => {
    if (height > width) {
      setIsPortrait(true);
      setIsLandscape(false);
    } else {
      setIsPortrait(false);
      setIsLandscape(true);
    }
  }, [width, height]);

  return (
    <View style={styles.container}>
      <Pressable style={styles.cardContainer} onPress={() => navigation.navigate("ItemDetail", { id: product.id })}>
        <Card style={styles.card}>
          <View style={styles.containerText}>
            <Text style={width < 350 ? styles.textMin : styles.text}>{product.title}</Text>
          </View>
          <View style={styles.containerImg}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: product.images[0] }}
            />
          </View>
        </Card>
      </Pressable>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
  },
  cardContainer: {
    width: '100%',
  },
  card: {
    margin: 15,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
    width: '90%',
  },
  containerImg: {

  },
  image: {
    minHeight: 300,
    minWidth: 300,
    borderRadius: 5,
  },
  containerText:{
    position: 'absolute',
    zIndex: 10,
    backgroundColor: colors.orange,
    padding: 5,
    width:250,
    alignItems:'center',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
  },
  text: {
    width: "100%",
    fontFamily: "InterRegular",
    fontSize: 25,
    textAlign:'center'
  },
  textMin: {
    width: "70%",
    fontFamily: "InterRegular",
    fontSize: 25
  },
});
