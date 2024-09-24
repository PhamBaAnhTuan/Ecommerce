import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
// Context
import { useTheme } from '../../context/ThemeContext';

interface Props{
   onPress: any,
}
const Header = (props: Props) => {
   // Theme
   const {theme} = useTheme();
   return (
      <View style={[styles.header, { backgroundColor: theme.orange }]}>
         <TouchableOpacity style={styles.icon} onPress={props.onPress} >
            <Ionicons name="arrow-back" size={21} color="white" />
         </TouchableOpacity>
         <TouchableOpacity style={styles.icon}>
            <Entypo name="dots-three-vertical" size={17} color="white" />
         </TouchableOpacity>
      </View>
   )
}

export default Header

const styles = StyleSheet.create({
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
})