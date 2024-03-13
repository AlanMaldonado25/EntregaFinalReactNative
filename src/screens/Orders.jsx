import { FlatList, StyleSheet, Text, View } from "react-native";
import orders from "../data/orders.json";
import OrderItem from "../components/OrderItem";
import { useSelector } from "react-redux";
import {useGetOrdersQuery} from '../services/shopService'
import {colors} from '../global/colors'
const Orders = () => {
  const{data:orders,isLoading} = useGetOrdersQuery();
  console.log(orders)
  if(isLoading){
    return <Text style={styles.loading}>Loading...</Text>
  }
  const ordersObject = orders || {};
  const ordersArray = Object.keys(ordersObject).map((key)=>({
    id:key,
    ...ordersObject[key]
  }))
  return (
    <View>
      {ordersArray.length > 0 ? (
      <FlatList
        data={ordersArray}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={(order) => order.id}
      />
    ) : (
      <View style={styles.containerNoOrders}>
        <Text style={styles.noOrders}>No hay órdenes realizadas.</Text>
      </View>
    )}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  loading:{
    backgroundColor:colors.vermillion,
    color:colors.ivory,
    justifyContent:'center',
    alignItems:'center',
    height:100,
  },
  noOrders:{
    fontSize:30,
    backgroundColor:colors.orange,
    color:colors.jet,
    padding:40,
    
  },
  containerNoOrders:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.jet,
    height:'100%',

  }
});
