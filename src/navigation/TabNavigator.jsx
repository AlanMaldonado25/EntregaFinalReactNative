import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ShopStack from "../navigation/ShopStack";
import CartStack from "./CartStack";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import { Entypo, AntDesign, FontAwesome, Ionicons,FontAwesome6 } from "@expo/vector-icons";
import OrderStack from "./OrderStack";
import MyProfileStack from "./MyProfileStack";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="ShopTab"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <FontAwesome6 name="shop" size={30} color={focused ? colors.orange : colors.ivory} />
                <Text style={{ color: focused ? colors.orange : colors.ivory, marginTop:5,fontFamily:'Comforta'}}>Shop</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <FontAwesome
                  name="shopping-cart"
                  size={30}
                  color={focused ? colors.orange : colors.ivory}
                />
                <Text style={{ color:focused ? colors.orange : colors.ivory, marginTop:5,fontFamily:'Comforta'}}>Cart</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="OrdersTab"
        component={OrderStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <AntDesign
                  name="copy1"
                  size={30}
                  color={focused ? colors.orange : colors.ivory}
                />
                <Text style={{ color:focused ? colors.orange : colors.ivory, marginTop:5,fontFamily:'Comforta'}}>Orders</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MyProfileStack"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color={focused ? colors.orange : colors.ivory}
                />
                <Text style={{ color:focused ? colors.orange : colors.ivory, marginTop:5,width:100,textAlign:'center',fontFamily:'Comforta'}}>My profile</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.jet,
    height: 90,
    padding:20
  },
  tabContainer: {
    justifyContent: "center",
    alignItems: "center",
    width:'100%',
    margin:0
  },
});
