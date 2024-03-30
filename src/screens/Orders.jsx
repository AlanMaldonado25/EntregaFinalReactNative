import { FlatList, StyleSheet, Text, View ,ActivityIndicator} from "react-native";
import orders from "../data/orders.json";
import OrderItem from "../components/OrderItem";
import { useSelector } from "react-redux";
import {useGetOrdersQuery} from '../services/shopService'
import {colors} from '../global/colors'
const Orders = () => {
  const{data:orders,isLoading} = useGetOrdersQuery();
  if(isLoading){
    return (<View style={styles.containerLoader}><ActivityIndicator size="large" color={colors.orange} /></View>)
  }
  const ordersObject = orders || {};
  const ordersArray = Object.keys(ordersObject).map((key)=>({
    id:key,
    ...ordersObject[key]
  }))
  return (
    <View style={styles.container}>
      {ordersArray.length > 0 ? (
      <FlatList
        data={ordersArray}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={(order) => order.id}
        style={styles.flat}
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
  containerLoader:{
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.jet,
  },
  noOrders:{
    fontSize:30,
    backgroundColor:colors.orange,
    color:colors.jet,
    padding:40,
    fontFamily:'Comforta',
    borderRadius:15
  },
  containerNoOrders:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.jet,

  },
  container:{
    backgroundColor:colors.jet,
    height: '100%',
    flex:1,
  },
  flat:{
    height:'100%'
  }
});
