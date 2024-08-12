import { Dimensions, Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Theme context
import { useTheme } from '../../context/ThemeContext';

const Search = ({ navigation }) => {
  const {theme} = useTheme();
  return (
    <SafeAreaView style={[styles.safeView, {backgroundColor: theme.bgc}]}>

      

    </SafeAreaView>
  )
}

export default Search;

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: '#F1B720',
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    // alignItems: 'center',
  },

})