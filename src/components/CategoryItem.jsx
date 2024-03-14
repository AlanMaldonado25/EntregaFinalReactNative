import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch()

  return (
    <Pressable
      onPress={() => {
        dispatch(setCategorySelected(category))
        navigation.navigate("ItemListCategories", { category });
      }}
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.orange,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    textTransform:'uppercase',
    color:colors.ivory,
    fontWeight:'bold',
    fontFamily:'Comforta'
  },
});
