import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Context
import { useTheme } from '../../context/ThemeContext';

interface Props{
   onPress: any,
   itemImg: any,
   itemName: string,
   discount: number,
   price: number,
   sold: number
}

const ItemCard = (props: Props) => {
   // Theme
   const { theme } = useTheme();
   return (
      <TouchableOpacity style={[styles.container, {backgroundColor: theme.white}]} onPress={props.onPress}>
         <View style={styles.itemImgContainer}>
         <Image style={styles.itemImg} source={{uri: props.itemImg}} />
         </View>

         <View style={styles.in4Container}>
            <Text style={[styles.itemName, { color: 'black' }]}>{props.itemName}</Text>

            <View style={styles.discountContainer}>
               <View style={styles.discountWrap}>
                  <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'white' }}>{props.discount}% OFF</Text>
               </View>

               <View style={[styles.freeShipWrap, {borderColor: 'green'}]}>
                  <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'green' }}>FREE SHIP</Text>
               </View>
            </View>

            <View style={styles.priceContainer}>
               <Text style={styles.price}>{props.price}$</Text>
               <Text style={[styles.sold, {color: 'black'}]}>{props.sold} sold</Text>
            </View>
         </View>
      </TouchableOpacity>
   )
}

export default ItemCard

const styles = StyleSheet.create({
   container: {
      height: 'auto',
      width: '48%',
      // borderWidth: 0.1,
      borderRadius: 10,
      marginBottom: 5,
      paddingVertical: 5,
      justifyContent: 'space-between',
   },


   itemImgContainer:{
      height: 200,
      width: '97%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      borderRadius: 10
   },
   itemImg: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
      borderRadius: 10,
      alignSelf: 'center',
   },


   // In4 container
   in4Container: {
      height: 'auto',
      width: '95%',
      // borderWidth: 1,
      alignSelf: 'center'
   },

   itemName: {
      fontSize: 13,
      fontWeight: 'bold',
      paddingVertical: 5,
   },


   // Discount container
   discountContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      // justifyContent: 'space-between'
   },

   discountWrap: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      paddingHorizontal: 5,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15
   },

   freeShipWrap: {
      height: 'auto',
      width: 'auto',
      borderWidth: 1,
      paddingHorizontal: 5,
      borderColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
   },


   // Price container
   priceContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      marginTop: 5,
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between'
   },

   price:{
      fontSize: 15,
      color: 'tomato',
      fontWeight: '500'
   },
   sold:{
      fontSize: 11,
      color: 'black'
   }
})