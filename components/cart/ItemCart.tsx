import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
// Context
import { useTheme } from '../../context/ThemeContext';
// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props{
   itemImg: any,
   itemName: string,
   discount: number,
   price: number,
   sold: number,
   star: number,
}
const ItemCart = (props: Props) => {
   // Theme
   const { theme } = useTheme();
   const [checked, setChecked] = useState(true);
   const handleCheck = () => setChecked(checked ? false : true);
   // Handle amount
   const [amount, setAmount] = useState(1);
   const Increase = () => setAmount(amount + 1);
   const Decrease = () => setAmount(amount !== 1 ? amount - 1 : amount);
   return (
      <View style={[styles.container, { backgroundColor: theme.gray }]}>
         <TouchableOpacity onPress={handleCheck}>
            {checked
            ? <AntDesign name="checkcircleo" size={24} color="black" />
            : <AntDesign name="checkcircle" size={24} color="green" />
            }
         </TouchableOpacity>

         <Image style={styles.itemImg} source={{uri: props.itemImg}} />

         <View style={styles.itemIn4}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: theme.text }}>{props.itemName}</Text>

            <View style={styles.discountContainer}>
               <View style={styles.discountWrap}>
                  <Text style={{ fontSize: 11, fontWeight: 'bold', color: theme.text }}>{props.discount}% off</Text>
               </View>

               <View style={[styles.freeShipWrap, { borderColor: theme.green }]}>
                  <Text style={{ fontSize: 11, fontWeight: '400', color: theme.green }}>Free ship</Text>
               </View>
            </View>

            <View style={styles.priceContainer}>
               <Text style={styles.price}>${props.price}</Text>
               <Text style={[styles.sold, { color: theme.text }]}>{props.sold} sold</Text>
               <View style={styles.starContainer}>
                  <Text style={[styles.sold, { color: theme.text }]}>{props.star}</Text>
                  <Image style={styles.starIcon} source={require('../../assets/icons/star.png')}/>
               </View>
            </View>

            <View style={styles.amountContainer}>
               <TouchableOpacity style={styles.icon} onPress={Decrease}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>-</Text>
               </TouchableOpacity>
               <Text style={{paddingHorizontal: 5}}>{amount}</Text>
               <TouchableOpacity style={styles.icon} onPress={Increase}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>+</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}

export default ItemCart

const styles = StyleSheet.create({
   container: {
      height: 120,
      width: '98%',
      // borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginVertical: 3
   },

   checkboxImg: {
      height: 35,
      width: 35,
      // marginHorizontal: 5
   },

   itemImg: {
      height: '90%',
      width: '27%',
      resizeMode: 'cover',
      borderRadius: 7
   },


   // Item container
   itemIn4: {
      height: '100%',
      width: '50%',
      // borderWidth: 1,
      justifyContent: 'space-evenly'
   },

   // Discount container
   discountContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      // paddingVertical: 5
   },
   discountWrap: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      paddingHorizontal: 5
   },
   freeShipWrap: {
      height: 'auto',
      width: 70,
      borderWidth: 1,
      borderColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
   },


   priceContainer: {
      height: 'auto',
      width: '75%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // paddingRight: 20
   },

   price:{
      fontSize: 15,
      color: 'tomato',
      fontWeight: '500',
   },
   sold:{
      fontSize: 11,
      color: 'black'
   },
   // Star container
   starContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   starIcon:{
      height: 15,
      width: 15
   },


   // Amount container
   amountContainer:{
      height: 'auto',
      width: 'auto',
      borderWidth: 1,
      borderRadius: 3,
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
      // paddingHorizontal: 3,
   },
   icon:{
      height: 'auto',
      width: 25,
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   }
})