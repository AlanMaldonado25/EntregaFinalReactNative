import { FlatList, Pressable, StyleSheet, Text, View,Alert } from "react-native";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import {colors} from '../global/colors'
import { clearCart } from "../features/shop/cartSlice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation()
  const dispatch = useDispatch();

  const confirmCart = ()=> {
    triggerPost({ total, cartItems, user: "loggedUser"})
    dispatch(clearCart())
    Alert.alert( 'Compra realizada','Compra realizada' [
      {text: 'OK', onPress: () => console.log('OK Pressed')}
    ])
  }

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(cartItem) => cartItem.id}
            style={styles.flatlist}
          />
          <Text style={styles.total}>Total: ${total}</Text>
          <Pressable onPress={confirmCart} style={styles.btnConfirm}>
            <Text style={styles.confirm}>Confirmar</Text>
          </Pressable>
        </>
      ) : (
        <View style={styles.btnConfirm}>
          <Text style={styles.confirm}>No hay productos agregados</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:"space-around",  
    alignItems:"center",  
    paddingTop:25,
    backgroundColor:colors.jet,
    width:'100%'
  },
  flatlist:{
    width:'100%',
  },
  btnConfirm:{
    backgroundColor:colors.orange,
    height:50,
    width: "80%",
    borderRadius: 10,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:15
  },confirm:{
    fontSize:25,
    fontWeight:'bold',
    color:colors.jet
  },
  total:{
    fontSize:30,
    color:colors.orange,
    fontWeight:'bold'
  }
});
