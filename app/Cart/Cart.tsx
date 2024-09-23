import { Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
// Theme context
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
// Components
import ItemCart from '../../components/cart/ItemCart';
// Icons
import Feather from 'react-native-vector-icons/Feather'

const Cart = ({ navigation }) => {
  // Theme
  const { theme } = useTheme();
  // Data
  const { books } = useData();
  // Handle search
  const [search, setSearch] = useState('');
  const handleSearchChange = (text: string) => setSearch(text);
  const resetSearch = () => setSearch('');
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.safeView}>
        <View style={[styles.header, { backgroundColor: theme.orange }]}>
          <View style={[styles.searchContainer, { backgroundColor: theme.white }]}>
            <TouchableOpacity style={styles.icon}>
              <Feather name="camera" size={23} color="black" />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder='Search'
              value={search}
              onChangeText={handleSearchChange}
            />
            {search !== ''
              ? (
                <TouchableOpacity style={styles.icon} onPress={resetSearch}>
                  <Feather name="x-circle" size={21} color="black" />
                </TouchableOpacity>
              )
              : null}
          </View>
        </View>

        <View style={styles.itemContainer}>
          {books.map((book: any, index: number) => (
            <ItemCart
              key={index}
              itemImg={book.img}
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

  searchContainer: {
    height: 40,
    width: '95%',
    // borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5
  },
  icon: {
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1
  },
  xIcon: {
    height: 20,
    width: 20,
  },

  searchInput: {
    height: '100%',
    width: '84%',
    // borderWidth: 1
  },
  searchInput1: {
    height: '100%',
    width: '75%',
  },


  // Item container
  itemContainer: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
  }
})