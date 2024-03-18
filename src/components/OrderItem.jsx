import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import {colors} from '../global/colors'


const OrderItem = ({ item }) => {
  const total = item.items
    ? item.items.reduce(
      (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
      0
    )
    : 0;
    const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={width < 550 ? styles.celu : styles.card}>
        <Text style={styles.text}>Usuario: {item.user}</Text>
        <Text style={styles.text}>{item.date}</Text>
        <Text style={styles.text}>${item.total}</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card:{
    flexDirection:'row',
    margin:10,
    backgroundColor:colors.orange,
    padding:5,
    borderRadius:10,
    justifyContent:'space-around'
  },
  text:{
    fontFamily:'Comforta',
    fontSize:18,
    color:colors.jet,
    fontWeight:'bold'
  },
  celu:{
    backgroundColor:colors.orange,
    flexDirection:'column',
    margin:5,
    gap:5,
    alignItems:'center',
    borderRadius:10
  }
});
