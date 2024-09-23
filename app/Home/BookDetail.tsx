import { Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react';
// Theme
import { useTheme } from '../../context/ThemeContext';
import { useRoute } from '@react-navigation/native';

const BookDetail = ({ navigation }) => {
   const { theme } = useTheme();
   // Route get params
   const route = useRoute();
   const selectedItem = route.params?.selectedItem;
   // Handle follow
   const [follow, setFollow] = useState('Follow');
   const handleFollow = () => {
      follow === 'Follow'
         ? (setFollow('Following'), ToastAndroid.show('Following', ToastAndroid.SHORT))
         : (setFollow('Follow'), ToastAndroid.show('UnFollow', ToastAndroid.SHORT));
   }
   return (
      <SafeAreaView style={styles.safeView}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
               <Image source={require('../../assets/icons/back.png')} resizeMode='cover' style={{height: 24, width: 24}} />
            </TouchableOpacity>
            <View style={styles.imgContainer}>
               <Image style={styles.itemImg} source={require('../../assets/icons/book.png')} />
            </View>

            <View style={[styles.in4Container, { backgroundColor: theme.gray }]}>
               <View style={styles.voucherContainer}>
                  <Text style={[styles.itemName, { color: 'black' }]}>{selectedItem.name}</Text>
               </View>
            </View>

            <View style={[styles.in4Container, { backgroundColor: theme.gray }]}>
               <View style={styles.voucherContainer}>
                  {/* <Text style={styles.price}>{selectedItem.price} VND</Text> */}
                  {/* <Text style={[styles.text, { color: 'black', paddingRight: 5 }]}>Đã bán {selectedItem.sold}</Text> */}
               </View>

               <TouchableOpacity style={styles.brandContainer}>
                  <TouchableOpacity >
                     <Text style={[styles.brandName, { color: 'plum' }]} >
                        {/* {selectedItem.brand} */}
                        {/* {selectedItem.author} */}
                     </Text >
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.flBtn, { borderColor: 'black' }]} onPress={handleFollow} >
                     <Text style={{ color: 'black', fontSize: 11 }} >{follow}</Text>
                  </TouchableOpacity>
               </TouchableOpacity>

               <TouchableOpacity style={styles.voucherContainer}>
                  <Text style={[styles.voucherText, { color: 'black' }]} >Type</Text>

                  <View style={styles.voucherWrap}>
                     {/* <Text style={[styles.text, { color: 'black' }]}>{selectedItem.type}</Text> */}
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.voucherContainer}>
                  <Text style={[styles.voucherText, { color: 'black' }]} >Discount</Text>

                  <View style={styles.voucherWrap}>
                     <View style={styles.discountWrap}>
                        {/* <Text style={{ fontSize: 11, fontWeight: 'bold', color: theme.gray }}>{selectedItem.discount}% off</Text> */}
                     </View>
                     {/* <MaterialIcons name="keyboard-arrow-right" size={24} color={'black'} /> */}
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.voucherContainer}>
                  <Text style={[styles.voucherText, { color: 'black' }]} >Free ship</Text>

                  <View style={styles.voucherWrap}>
                     <View style={[styles.freeShipWrap, { borderColor: 'green' }]}>
                        <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'green' }}>Free ship</Text>
                     </View>
                     {/* <MaterialIcons name="keyboard-arrow-right" size={24} color={'black'} /> */}
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.voucherContainer}>
                  <Text style={[styles.voucherText, { color: 'black' }]} >Rate</Text>

                  <View style={styles.voucherWrap}>
                     {/* <Text style={[styles.text, { color: 'black' }]}>{selectedItem.rate}</Text> */}
                     {/* <MaterialIcons name="star" size={21} color="gold" /> */}
                  </View>
               </TouchableOpacity>

            </View>

            <View style={[styles.in4Container, { backgroundColor: theme.gray }]}>
               <View style={styles.voucherContainer}>
                  <Text style={[styles.voucherText, { color: 'black' }]} >Description</Text>
               </View>

               {/* <Text style={{ textAlign: 'justify' }}>{selectedItem.description}</Text> */}
            </View>
         </ScrollView>

         <View style={styles.buyBtnContainer}>
            <View style={[styles.leftContainer, { backgroundColor: theme.lightOrange }]}>
               <TouchableOpacity
                  style={[styles.chatIcon, { borderColor: theme.gray }]}
                  // onPress={() => navigation.navigate('BuyNow')}
               >
                  {/* <Ionicons name="gift" size={22} color={theme.gray} /> */}
               </TouchableOpacity>

               <TouchableOpacity style={[styles.cartIcon, { borderColor: theme.gray }]} >
                  {/* <FontAwesome name="cart-plus" size={22} color={theme.gray} /> */}
               </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.buyBtn, { backgroundColor: theme.orange }]} onPress={() => navigation.navigate('BuyNow', { selectedItem: selectedItem })}>
               <Text style={styles.buyText}>Buy now</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}

export default BookDetail

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
   },
   // Header
   header: {
      height: 50,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      // borderWidth: 1,
   },
   backIcon: {
      height: 'auto',
      width: 'auto',
      // alignItems: 'center',
      // justifyContent: 'center',
      // borderWidth: 1,
      resizeMode: 'contain',
      position: 'absolute',
      top: 15,
      left: 15,
      zIndex: 1
   },


   imgContainer: {
      height: 350,
      width: '100%',
      // borderWidth: 1,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
   },

   itemImg: {
      height: '80%',
      width: '80%',
      resizeMode: 'contain',
      // borderRadius: 10
   },


   // In4 container
   in4Container: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      borderRadius: 10,
      alignSelf: 'center',
      // backgroundColor: 'gray',
      marginTop: 3,
      paddingHorizontal: 7,
      paddingVertical: 7
   },

   itemName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      // borderWidth: 1,
   },


   // Brand container
   brandContainer: {
      height: 30,
      width: '100%',
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "space-between",
   },
   brandName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
   },
   flBtn: {
      height: 25,
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'white',
      // marginLeft: 20,
   },

   // Price container
   price: {
      fontSize: 20,
      fontWeight: "bold",
      color: 'tomato',
      // borderWidth: 1,
   },
   text: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white',
      // paddingRight: 5
   },

   // Voucher container
   voucherContainer: {
      height: 'auto',
      width: '100%',
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1,
      paddingVertical: 10
   },
   voucherText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white'
   },

   voucherWrap: {
      width: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1
   },

   discountWrap: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 5
   },

   freeShipWrap: {
      height: 'auto',
      width: 'auto',
      paddingHorizontal: 5,
      borderWidth: 1,
      borderColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
   },


   // Buy btn container
   buyBtnContainer: {
      height: 60,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // marginBottom: 10,
      // borderWidth: 1,
   },

   leftContainer: {
      height: '100%',
      width: '50%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      // borderWidth: 1,
      backgroundColor: '#F1B720'
   },

   // Icon
   chatIcon: {
      height: '80%',
      width: '50%',
      borderRightWidth: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
   },
   cartIcon: {
      height: '80%',
      width: '50%',
      borderLeftWidth: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
   },


   buyBtn: {
      height: '100%',
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      backgroundColor: 'tomato'
   },
   buyText: {
      fontWeight: '500',
      color: 'white'
   }
})