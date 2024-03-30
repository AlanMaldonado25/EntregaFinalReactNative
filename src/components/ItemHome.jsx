import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {colors} from '../global/colors'
export default function ItemHome({navigation,product}) {
    return (
        <View>
            <Text style={{backgroundColor:colors.jet,color:jet}}>{product.category}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})