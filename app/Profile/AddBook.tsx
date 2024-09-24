import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
// Context
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
// Components
import AddButton from '../../components/profile/AddButton';
import Header from '../../components/home/Header';

const AddBook = ({ navigation }) => {
   // Theme
   const { theme } = useTheme();
   // Add book
   const { data, setData, addBookMethod } = useData();

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

            <Header
               onPress={() => navigation.goBack()}
            />

            <View style={styles.formAddBook}>
               <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>Add New Book</Text>
               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Title:</Text>
                  <TextInput style={styles.textInput} placeholder="Enter book title"
                     onChangeText={(value) => setData({ ...data, title: value })}
                     value={data.title}
                  />
               </View>

               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Author:</Text>
                  <TextInput style={styles.textInput} placeholder="Enter author's name"
                     onChangeText={(value) => setData({ ...data, author: value })}
                     value={data.author}
                  />
               </View>

               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Image book:</Text>
                  <TextInput style={styles.textInput} placeholder="Image Url"
                     onChangeText={(value) => setData({ ...data, img: value })}
                     value={data.img}
                     keyboardType='url'
                  />
               </View>

               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Price:</Text>
                  <TextInput style={styles.textInput} placeholder="$" keyboardType='number-pad'
                     onChangeText={(value) => setData({ ...data, price: value })}
                     // onChange={handlePriceChange}
                     value={data.price}
                  />
               </View>

               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Type:</Text>
                  <TextInput style={styles.textInput} placeholder="Life, Self develop..."
                     onChangeText={(value) => setData({ ...data, type: value })}
                     value={data.type}
                  />
               </View>

               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Discount:</Text>
                  <TextInput style={styles.textInput} placeholder="Number" keyboardType='number-pad'
                     onChangeText={(value) => setData({ ...data, discount: value })}
                     value={data.discount}
                  />
               </View>

               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Description:</Text>
                  <TextInput style={styles.textInput} placeholder="Enter description"
                     onChangeText={(value) => setData({ ...data, description: value })}
                     value={data.description}
                     multiline={true}
                  />
               </View>
            </View>

            <AddButton
               onPress={addBookMethod}
               title='Add book'
               color='green'
            />

         </ScrollView>
      </SafeAreaView>
   )
}

export default AddBook

const styles = StyleSheet.create({
   // Form container
   formAddBook: {
      height: 'auto',
      width: '97%',
      backgroundColor: 'white',
      // borderWidth: 1,
      borderRadius: 10,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10
   },

   inputWrap: {
      height: 'auto',
      width: '90%',
      marginBottom: 10,
      // borderWidth: 1,
   },
   titleText: {
      fontSize: 15,
      fontWeight: 'bold',
   },
   textInput: {
      width: '100%',
      height: 'auto',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      // borderWidth: 1,
      alignSelf: 'center',
   },
})