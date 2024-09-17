import { Dimensions, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
// Theme context
import { useTheme } from '../../context/ThemeContext';
// Icons
import Entypo from 'react-native-vector-icons/Entypo';
// Components
import SettingCard from '../../components/profile/SettingCard';


const Profile = ({ navigation }) => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.safeView}>

        <View style={[styles.profileContainer, {backgroundColor: theme.orange}]}>
          <Image style={styles.profileImage} source={require('../../assets/images/zeros.jpg')} />
          <View style={styles.profileInfoContainer}>
            <Text style={[styles.userNameText, { color: theme.text }]}>TuanPham</Text>
            <Text style={{ color: theme.text, opacity: 0.8 }}>phambaanhtuan2003@gmail.com</Text>
          </View>
        </View>

        <View style={styles.settingContainer}>
          <SettingCard 
            icon={require('../../assets/icons/saved.png')}
            title='Saved'
          />
          <SettingCard 
            icon={require('../../assets/icons/collection.png')}
            title='Collections'
          />
          <SettingCard 
            icon={require('../../assets/icons/activities.png')}
            title='Your activities'
          />
          <SettingCard 
            icon={require('../../assets/icons/cart.png')}
            title='Order Details'
          />
          <SettingCard 
            icon={require('../../assets/icons/notification.png')}
            title='Notifications'
          />
        </View>
        
        <View style={styles.settingContainer}>
          <SettingCard 
            icon={require('../../assets/icons/saved.png')}
            title='Saved'
          />
          <SettingCard 
            icon={require('../../assets/icons/collection.png')}
            title='Collections'
          />
          <SettingCard 
            icon={require('../../assets/icons/activities.png')}
            title='Your activities'
          />
          <SettingCard 
            icon={require('../../assets/icons/cart.png')}
            title='Order Details'
          />
          <SettingCard 
            icon={require('../../assets/icons/notification.png')}
            title='Notifications'
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },


  // profile container
  profileContainer: {
    height: 110,
    width: '100%',
    // borderWidth: 1,
    // paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

  profileImage: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
    borderRadius: 100
  },

  profileInfoContainer: {
    height: '100%',
    width: '65%',
    // borderWidth: 1,
    justifyContent: 'center',
  },
  userNameText: {
    fontSize: 17,
    fontWeight: 'bold'
  },


  // setting container
  settingContainer: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    alignSelf: 'center',
    backgroundColor: 'lightgray'
  },
})