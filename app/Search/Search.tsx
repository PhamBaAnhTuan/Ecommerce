import { Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
// Theme context
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
// Icons
import Feather from 'react-native-vector-icons/Feather';
// Components
import ItemCard from '../../components/search/ItemCard';
import CategoryCard from '../../components/search/CategoryCard';
import SearchInput from '../../components/search/SearchInput';

const Search = ({ navigation }) => {
  // Theme
  const { theme } = useTheme();
  // Data
  const { books } = useData();
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.safeView}>
        <View style={[styles.header, {backgroundColor: theme.orange}]}>
          <SearchInput/>
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
                itemImg={book.img ? book.img : 'https://dictionary.cambridge.org/vi/images/thumb/book_noun_001_01679.jpg?version=6.0.31'}
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
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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