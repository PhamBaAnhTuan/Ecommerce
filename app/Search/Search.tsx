import { Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
// Theme context
import { useTheme } from '../../context/ThemeContext';
// Components
import ItemCard from '../../components/search/ItemCard';
import CategoryCard from '../../components/search/CategoryCard';

const Search = ({ navigation }) => {
  // Theme
  const { theme } = useTheme();
  // Handle search
  const [search, setSearch] = useState('');
  const handleSearchChange = (text: string) => setSearch(text);
  const resetSearch = () => setSearch('');
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.safeView}>
        <View style={styles.header}>
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
        </View>

        <View style={styles.categoryContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CategoryCard
              category='History'
              onPress={null}
            />
            <CategoryCard
              category='Math'
              onPress={null}
            />
            <CategoryCard
              category='Mental Health'
              onPress={null}
            />
            <CategoryCard
              category='Physical Health'
              onPress={null}
            />
            <CategoryCard
              category='Plant'
              onPress={null}
            />
          </ScrollView>
        </View>

        <View style={styles.recommendContainer}>
          <Text style={[styles.recommendText, { color: theme.text }]}>Recommend</Text>
          <View style={styles.recommendWrap}>
            <ItemCard
              itemImg={require('../../assets/icons/book.png')}
              itemName='History book'
            />
            <ItemCard
              itemImg={require('../../assets/icons/book1.png')}
              itemName='Biology book'
            />
            <ItemCard
              itemImg={require('../../assets/icons/book3.png')}
              itemName='Math book'
            />
            <ItemCard
              itemImg={require('../../assets/icons/book.png')}
              itemName='Mentality book'
            />
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Search;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },


  // Header
  header: {
    height: 'auto',
    width: '100%',
    // backgroundColor: '#F1B720',
    marginVertical: 15,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    // borderWidth: 1
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
  },
  xIcon: {
    height: 20,
    width: 20,
  },

  searchInput: {
    height: '100%',
    width: '85%',
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


  // Category container
  categoryContainer:{
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },


  // Recommend container
  recommendContainer: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
  },

  recommendText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 10
  },

  recommendWrap:{
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',
  }
})