import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
// Context
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
// Components
import AddButton from '../../components/profile/AddButton';
import Header from '../../components/home/Header';

const UpdateBook = ({ navigation }) => {
   // Route
   const route = useRoute();
   const selectedBook = route.params?.selectedBook;
   // Theme
   const { theme } = useTheme();
   // Add book
   const { data, setData, updateBookMethod } = useData();
   // const [id, setId] = useState('');
   // setId(selectedBook?.id);

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

            <Header
               onPress={() => navigation.goBack()}
            />

            <Text style={styles.title}>Update Book</Text>
            <View style={styles.formUpdateBook}>
               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Title:</Text>
                  <TextInput style={styles.textInput} placeholder="Enter book title"
                     onChangeText={(value) => setData({ ...data, title: value })}
                     value={selectedBook.title}
                  />
               </View>

               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Author:</Text>
                  <TextInput style={styles.textInput} placeholder="Enter author's name"
                     onChangeText={(value) => setData({ ...data, author: value })}
                     value={selectedBook.author}
                  />
               </View>

               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Image book:</Text>
                  <TextInput style={styles.textInput} placeholder="Image Url"
                     onChangeText={(value) => setData({ ...data, img: value })}
                     value={selectedBook.img}
                     keyboardType='url'
                  />
               </View>

               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Price:</Text>
                  <TextInput style={styles.textInput} placeholder="$" keyboardType='number-pad'
                     onChangeText={(value) => setData({ ...data, price: value })}
                     value={selectedBook.price}
                  />
               </View>

               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Type:</Text>
                  <TextInput style={styles.textInput} placeholder="Life, Self develop..."
                     onChangeText={(value) => setData({ ...data, type: value })}
                     value={selectedBook.type}
                  />
               </View>

               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Discount:</Text>
                  <TextInput style={styles.textInput} placeholder="Number" keyboardType='number-pad'
                     onChangeText={(value) => setData({ ...data, discount: value })}
                     value={selectedBook.discount}
                  />
               </View>

               <View style={styles.inputWrap}>
                  <Text style={styles.titleText}>Description:</Text>
                  <TextInput style={styles.textInput} placeholder="Enter description"
                     onChangeText={(value) => setData({ ...data, description: value })}
                     value={selectedBook.description}
                     multiline={true}
                  />
               </View>

               <AddButton
                  onPress={() => updateBookMethod(selectedBook.id)}
                  title='Update'
                  color='green'
               />
            </View>

         </ScrollView>
      </SafeAreaView>
   )
}

export default UpdateBook

const styles = StyleSheet.create({
   title: {
      fontSize: 21,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
      paddingTop: 20,
      paddingBottom: 5,
   },


   // Form container
   formUpdateBook: {
      height: 'auto',
      width: '100%',
      backgroundColor: 'white',
      // borderWidth: 1,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
   },

   inputWrap: {
      height: 'auto',
      width: '95%',
      marginBottom: 10,
      // borderWidth: 1,
   },
   titleText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black'
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