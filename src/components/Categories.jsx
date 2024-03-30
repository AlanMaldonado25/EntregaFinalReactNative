import { FlatList, StyleSheet, Text, View } from "react-native";
import { useGetCategoriesQuery, useGetProductsQuery } from "../services/shopService";
import CategoryItem from "./CategoryItem";
import { colors } from "../global/colors"
import ItemHome from "./ItemHome";

function Categories({ navigation }) {

  const { data, isLoading, error } = useGetCategoriesQuery();
  const { products } = useGetProductsQuery();
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CategoryItem navigation={navigation} category={item} />
          )}
          keyExtractor={(category) => category}
        />
      </View>
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.jet,
    textAlign: 'center',
    height: '100%',
  }
});