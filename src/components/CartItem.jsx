import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions,Alert } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { colors } from '../global/colors'
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/shop/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const remove = () => {
    console.log(item.id)
    dispatch(removeItem(item.id))
    Alert.alert( `Borraste \n ${item.title} \n del carrito`,'Borrado con exito' [
      {text: 'OK', onPress: () => console.log('OK Pressed')}
    ])
  }
  const { width, height } = useWindowDimensions();
  return (
    <View style={width < 400 ? styles.container : styles.containerS}>
      <View>
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>{item.title}</Text>
        </View>
        <View>
          <Image source={{ uri: item.thumbnail }} style={styles.icono} />
        </View>
        <View style={styles.containerDescripcion}>
          <Text style={styles.cantidad}>Cantidad: {item.quantity}</Text>
          <Text style={styles.precio}>Precio unitario: ${item.price}</Text>
        </View>
      </View>

      <Pressable onPress={remove}>
        <FontAwesome6 name="delete-left" size={30} color={colors.vermillion} />
        <Text style={{ color: colors.jet, fontSize: 16 }}>Borrar</Text>
      </Pressable>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.orange,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
    height: 100,
  },
  containerS: {
    flex: 1,
    maxWidth: "100%",
    backgroundColor: colors.orange,
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:'center',
    margin:10,
    borderRadius:10,
    padding:10,
    

  },
  titulo: {
    fontSize: 20,
    color: colors.jet,
    fontWeight: 'bold'
  },
  containerDescripcion: {
    gap: 5
  },
  cantidad: {
    fontSize: 18,
    color: colors.jet
  },
  precio: {
    fontSize: 20,
    color: colors.jet
  },
  icono: {
    height: 60,
    width: 60
  }
})