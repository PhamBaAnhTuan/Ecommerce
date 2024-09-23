import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
// Context
import { useTheme } from '../../context/ThemeContext';

const AddBook = ({navigation}) => {
   // Theme
   const {theme} = useTheme();
   return (
      <SafeAreaView style={{flex: 1}}>
         <View style={[styles.header, { backgroundColor: theme.orange }]}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()} >
               <Ionicons name="arrow-back" size={21} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
               <Entypo name="dots-three-vertical" size={17} color="white" />
            </TouchableOpacity>
         </View>

         <View style={styles.formAddBook}></View>
      </SafeAreaView>
   )
}

export default AddBook

const styles = StyleSheet.create({
   // Header
   header: {
      height: 50,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      // borderWidth: 1,
   },
   icon: {
      height: 30,
      width: 30,
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   },


   // Form container
   formAddBook:{
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
   }
})