import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";
import constants from "expo-constants"
function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height:70,
    width: "100%",
    backgroundColor: colors.jet,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: colors.vermillion,
    fontSize: 25,
    paddingTop:35,
    fontWeight:'bold',
  },
});
