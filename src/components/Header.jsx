import { AntDesign } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteSessions } from "../db";
import { logOut } from "../features/auth/authSlice";
import { colors } from "../global/colors";
function Header({ title }) {
  const { localId, user } = useSelector(state => state.authReducer.value)
  const dispatch = useDispatch();
  const onLogOut = async () => {
    try {
      dispatch(logOut())
      const deletedSession = await deleteSessions({ localId })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      {user ? <Pressable onPress={onLogOut} style={styles.pressa}>
        <AntDesign name="logout" size={30} color={colors.orange} style={styles.logout} />
      </Pressable> : null}
      <Text style={styles.text}>{title}</Text>

    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.jet,
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  text: {
    textAlign: "center",
    color: colors.vermillion,
    fontSize: 30,
    paddingTop: 35,
    fontWeight: '900',
    fontFamily: 'Comforta'
  },
  logout: {

  },
  pressa: {
    position: 'absolute',
    top: 50,
    left: 10,
    transform: 'rotate(180deg)'
  }
});
