import { FlatList, StyleSheet, View } from "react-native";
import { useGetCategoriesQuery } from "../services/shopService";
import CategoryItem from "./CategoryItem";
import {colors} from "../global/colors"

function Categories({ navigation }) {
  // const categories = useSelector((state) => state.shopReducer.value.categories);

  const { data, isLoading, error } = useGetCategoriesQuery();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor:colors.jet,
    textAlign:'center',
    height:'100%',
  },
});