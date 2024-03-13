import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
  const total = item.items
  ? item.items.reduce(
      (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
      0
    )
  : 0;
  return (
    <View>
      <Text>Usuario: {item.user}</Text>
      <Text>{new Date(item.createdAt).toLocaleString()}</Text>
      <Text>{item.total}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
