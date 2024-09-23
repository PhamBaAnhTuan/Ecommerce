import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Theme
import { useTheme } from '../../context/ThemeContext';

interface Props{
   icon: any,
   title: string,
}
const SettingCard = (props: Props) => {
   const {theme} = useTheme();
   return (
      <TouchableOpacity style={styles.container}>
         <View style={styles.iconContainer}>
            <Image style={styles.icon} source={props.icon} />
         </View>
         <View style={styles.contentContainer}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>{props.title}</Text>
         </View>
         <View style={styles.wrap}>
            <Image style={styles.rightIcon} source={require('../../assets/icons/right.png')} />
         </View>
      </TouchableOpacity>
   )
}

export default SettingCard

const styles = StyleSheet.create({
   container:{
      height: 60,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-between'
   },

   iconContainer:{
      height: '100%',
      width: '20%',
      alignItems: 'center',
      justifyContent: 'center',
   },
   icon:{
      height: 30,
      width: 30,
      resizeMode: 'contain',
   },


   contentContainer:{
      height: '100%',
      width: '65%',
      // borderWidth: 1,
      justifyContent: 'center',
      marginLeft: 10,
   },


   wrap:{
      height: '100%',
      width: '15%',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   },
   rightIcon:{
      height: 24,
      width: 24,
      resizeMode: 'contain',
   }
})