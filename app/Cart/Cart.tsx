import { Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
// Theme context
import { useTheme } from '../../context/ThemeContext';
// Components
import ItemCart from '../../components/cart/ItemCart';

const Cart = ({ navigation }) => {

  const { theme } = useTheme();
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.safeView}>
        <View style={[styles.headerContainer, {backgroundColor: theme.orange}]}>
          <Text style={[styles.cartTitle, { color: theme.text }]}>Your cart</Text>
        </View>
        <View style={styles.itemContainer}>
          <ItemCart
            itemImg={require('../../assets/icons/book.png')}
            itemName='Math'
            discount={20}
            price={21}
            sold={8365}
            star={4.5}
          />
          <ItemCart
            itemImg={require('../../assets/icons/book.png')}
            itemName='History'
            discount={10}
            price={26}
            sold={6887}
            star={5}
          />
          <ItemCart
            itemImg={require('../../assets/icons/book.png')}
            itemName='Plant'
            discount={5}
            price={2}
            sold={9943}
            star={4.7}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Cart;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },


  // Header container
  headerContainer: {
    height: 70,
    width: '100%',
    // borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: '#F1B720',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },


  // Item container
  itemContainer: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    marginTop: 10
  }
})