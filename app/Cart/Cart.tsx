import { Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
// Theme context
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
// Icons
import Feather from 'react-native-vector-icons/Feather'
// Components
import ItemCart from '../../components/cart/ItemCart';
import SearchInput from '../../components/search/SearchInput';

const Cart = ({ navigation }) => {
  // Theme
  const { theme } = useTheme();
  // Data
  const { books } = useData();
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.safeView}>
        <View style={[styles.header, { backgroundColor: theme.orange }]}>
          <SearchInput/>
        </View>

        <View style={styles.itemContainer}>
          {books.map((book: any, index: number) => (
            <ItemCart
              key={index}
              itemImg={book.img ? book.img : 'https://dictionary.cambridge.org/vi/images/thumb/book_noun_001_01679.jpg?version=6.0.31'}
              itemName={book.title}
              discount={book.discount}
              price={book.price}
              sold={book.sold}
              star={book.rate}
            />
          ))}
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
  header: {
    height: 100,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },


  // Item container
  itemContainer: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
  }
})