import { Alert, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
// Context
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
// Components
import ListBook from '../../components/profile/ListBook';
import SearchInput from '../../components/search/SearchInput';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const Developer = ({navigation}) => {
   // Theme
   const { theme } = useTheme();
   // Data
   const { books, removeBookMethod } = useData();
   const [id, setId] = useState('');
   // Remove confirm
   const handleRemove = () => {
      Alert.alert(
         'Remove?', 'Do you wanna remove this book?',
         [
            {
               text: 'Cancel',
               style: 'cancel'
            },
            {
               text: 'Remove',
               onPress: () => {
                  removeBookMethod(id);
                  console.log('Removed book!')
                  ToastAndroid.show('Removed this book!', ToastAndroid.SHORT);
                  setId('');
               },
               style: 'default'
            }
         ]
      )
   }
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <View style={[styles.headerContainer, { backgroundColor: theme.orange }]}>
            <Text style={{ fontSize: 21, fontWeight: 'bold', paddingLeft: 10, color: 'white' }}>Welcome to Developer Mode</Text>
            <SearchInput />
         </View>

         <View style={[styles.listBookContainer]}>
            <View style={styles.titleContainer}>
               <Text style={styles.title}>List of books</Text>
               <TouchableOpacity onPress={() => navigation.navigate('AddBook')}>
                  <Ionicons name="add-circle-outline" size={27} color="black" />
               </TouchableOpacity>
            </View>

            <View style={[styles.listBookWrap, { backgroundColor: theme.white }]}>
               {books.map((book: any, index: number) => (
                  <ListBook
                     key={index}
                     title={book.title}
                     onPress={() => navigation.navigate('UpdateBook', {selectedBook: books[index]})}
                     remove={() => { handleRemove(), setId(book.id) }}
                  />
               ))}
            </View>
         </View>
      </SafeAreaView>
   )
}

export default Developer

const styles = StyleSheet.create({
   headerContainer: {
      height: 100,
      width: '100%',
      justifyContent: 'space-evenly',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
   },


   // List book container
   listBookContainer: {
      height: 'auto',
      width: '100%',
      marginTop: 20,
   },

   titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginBottom: 5
   },
   title: {
      fontSize: 21,
      fontWeight: 'bold',
      color: 'black',
   },

   listBookWrap: {
      height: 'auto',
      width: '100%',
      borderRadius: 10,
      // borderWidth: 1
   }
})