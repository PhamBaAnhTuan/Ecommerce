import { Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
// Theme context
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
// Components
import ItemCard from '../../components/search/ItemCard';
import CategoryCard from '../../components/search/CategoryCard';
// Icons
import Feather from 'react-native-vector-icons/Feather';

const Search = ({ navigation }) => {
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
        <View style={[styles.header, {backgroundColor: theme.orange}]}>
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
            {books.map((book: any, index: number) => (
              <ItemCard
                key={index}
                onPress={()=> navigation.navigate('BookDetail', {selectedBook: books[index]})}
                itemImg={book.img}
                itemName={book.title}
              />
            ))}
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


  // Category container
  categoryContainer: {
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

  recommendWrap: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
})