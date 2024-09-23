import { Dimensions, Image, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Theme context
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
// Components
import TypeCard from '../../components/home/TypeCard';
import ItemCard from '../../components/home/ItemCard';
// Icons
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
  // Theme
  const { theme } = useTheme();
  // Data
  const { books } = useData();
  const {isAuthenticated, setIsAuthenticated} = useAuth();
  const log = () => console.log('Is authenticated: ', isAuthenticated);
  // Handle search
  const [search, setSearch] = useState('');
  const handleSearchChange = (text: string) => setSearch(text);
  const resetSearch = () => setSearch('');

  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>
      <StatusBar backgroundColor={'#ff7233'} />
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
                <TouchableOpacity onPress={resetSearch}>
                  <Feather name="x-circle" size={21} color="black" />
                </TouchableOpacity>
              )
              : null}
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Cart')}>
              <Ionicons name="bag-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Ionicons name="chatbubble-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>

        </View>

        <Text style={[styles.itemCardTitle, { color: theme.text }]}>Recommended daily</Text>
        <View style={styles.categoryContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TypeCard
              icon={require('../../assets/icons/book.png')}
              typeName='History book'
              onPress={log}
            />
            <TypeCard
              icon={require('../../assets/icons/book1.png')}
              typeName='Chemistry book'
              onPress={null}
            />
            <TypeCard
              icon={require('../../assets/icons/book2.png')}
              typeName='Biology book'
              onPress={null}
            />
            <TypeCard
              icon={require('../../assets/icons/book3.png')}
              typeName='Math book'
              onPress={null}
            />
            <TypeCard
              icon={require('../../assets/icons/book.png')}
              typeName='Anime book'
              onPress={null}
            />
            <TypeCard
              icon={require('../../assets/icons/book.png')}
              typeName='Mentality books'
              onPress={null}
            />
          </ScrollView>
        </View>

        <View style={styles.itemCardContainer}>
          <Text style={[styles.itemCardTitle, { color: theme.text }]}>Recommended daily</Text>
          <View style={styles.itemCardWrap}>
            {books.map((book: any, index: number) => (
              <ItemCard
                key={index}
                onPress={() => navigation.navigate('BookDetail', { selectedBook: books[index] })}
                itemImg={book.img}
                itemName={book.title}
                discount={book.discount}
                price={book.price}
                sold={book.rate}
              />
            ))}
            {books.map((book: any, index: number) => (
              <ItemCard
                key={index}
                onPress={() => navigation.navigate('BookDetail', { selectedBook: books[index] })}
                itemImg={book.img}
                itemName={book.title}
                discount={book.discount}
                price={book.price}
                sold={book.rate}
              />
            ))}
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },


  // Header
  header: {
    height: 100,
    width: '100%',
    // borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  searchContainer: {
    height: 40,
    width: '75%',
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
  },
  xIcon: {
    height: 20,
    width: 20,
  },

  searchInput: {
    height: '100%',
    width: '80%',
    // borderWidth: 1
  },
  searchInput1: {
    height: '100%',
    width: '75%',
  },


  // Header right
  headerRight: {
    height: 40,
    width: '20%',
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },


  // Category
  categoryContainer: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    // marginTop: 20
  },


  // Item card container
  itemCardContainer: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    // marginTop: 20,
    justifyContent: 'space-between'
  },

  itemCardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingVertical: 10
  },
  itemCardWrap: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
})