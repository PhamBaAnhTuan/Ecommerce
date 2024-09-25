import { Alert, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Props {
   onPress: any,
   title: string,
   remove: any
}
const ListBook = (props: Props) => {
   return (
      <View style={styles.container}>
         <TouchableOpacity style={styles.wrapLeft} onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.wrapRight} onPress={props.remove}>
            <Text style={styles.text}>Remove</Text>
         </TouchableOpacity>
      </View>
   )
}

export default ListBook

const styles = StyleSheet.create({
   container: {
      height: 55,
      width: '95%',
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
   },

   wrapLeft: {
      height: '100%',
      width: '80%',
      justifyContent: 'center',
      // borderWidth: 1
   },
   title: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black'
   },

   wrapRight: {
      height: '100%',
      width: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   },
   text: {
      fontSize: 13,
      fontWeight: '600',
      color: 'red'
   },
})