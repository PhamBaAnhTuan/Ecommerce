import { Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
// Theme context
import { useTheme } from '../../context/ThemeContext';
// Components
import TypeCard from '../../components/home/TypeCard';
import ItemCard from '../../components/home/ItemCard';

const Home = ({ navigation }) => {
  // Theme
  const { theme } = useTheme();
  // Handle search
  const [search, setSearch] = useState('');
  const handleSearchChange = (text: string) => setSearch(text);
  const resetSearch = () => setSearch('');
  const selectedItem = {name: 'test'}
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.safeView}>
        <View style={[styles.header, {backgroundColor: theme.orange}]}>
          <View style={[styles.searchContainer, { backgroundColor: theme.gray }]}>
            <TouchableOpacity>
              <Image style={styles.icon} source={require('../../assets/icons/camera.png')} resizeMode='cover' />
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
                  <Image style={styles.xIcon} source={require('../../assets/icons/x.png')} />
                </TouchableOpacity>
              )
              : null}
          </View>
  
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image style={styles.icon} source={require('../../assets/icons/cart.png')} resizeMode='cover' />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.icon} source={require('../../assets/icons/chat.png')} resizeMode='cover' />
            </TouchableOpacity>
          </View>
  
        </View>
  
        <View style={styles.categoryContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TypeCard
              icon={require('../../assets/icons/book.png')}
              typeName='History book'
              onPress={null}
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
          <Text style={[styles.itemCardTitle, {color: theme.text}]}>Recommended daily</Text>
          <View style={styles.itemCardWrap}>
            <ItemCard
              onPress={() => navigation.navigate('BookDetail', {selectedItem: selectedItem})}
              itemImg={require('../../assets/icons/book.png')}
              itemName='Book'
              discount={7}
              price={9}
              sold={7356}
            />
            <ItemCard
              onPress={() => navigation.navigate('BookDetail', {selectedItem: selectedItem})}
              itemImg={require('../../assets/icons/book.png')}
              itemName='Book'
              discount={7}
              price={23.1}
              sold={2473}
            />
            <ItemCard
              onPress={() => navigation.navigate('BookDetail', {selectedItem: selectedItem})}
              itemImg={require('../../assets/icons/book.png')}
              itemName='Book'
              discount={3}
              price={2}
              sold={635}
            />
            <ItemCard
              onPress={() => navigation.navigate('BookDetail', {selectedItem: selectedItem})}
              itemImg={require('../../assets/icons/book.png')}
              itemName='Book'
              discount={10}
              price={17}
              sold={8753}
            />
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
    paddingTop: 20,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  searchContainer: {
    height: 40,
    width: '75%',
    // borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    paddingLeft: 5
  },
  icon: {
    height: 25,
    width: 25,
  },
  xIcon: {
    height: 20,
    width: 20,
  },

  searchInput: {
    height: '100%',
    width: '82%',
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
    // flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },


  // Item card container
  itemCardContainer:{
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    marginTop: 20,
    justifyContent: 'space-between'
  },

  itemCardTitle:{
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 10
  },
  itemCardWrap:{
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',
  }
})