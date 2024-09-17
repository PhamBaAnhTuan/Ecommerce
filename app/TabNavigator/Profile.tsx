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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image style={styles.menu} source={require('../../assets/icons/back.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.menu} source={require('../../assets/icons/menu.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
          <Image style={styles.profileImage} source={require('../../assets/icons/user.png')} />
          <View style={styles.profileInfoContainer}>
            <Text style={[styles.userNameText, { color: theme.text }]}>TuanPham</Text>
            <Text style={{ color: theme.text, opacity: 0.8 }}>phambaanhtuan2003@gmail.com</Text>
          </View>
        </View>

        <View style={styles.settingContainer}>
          <SettingCard 
            icon={require('../../assets/icons/camera.png')}
            title='Saved'
          />
          <SettingCard 
            icon={require('../../assets/icons/camera.png')}
            title='Collections'
          />
          <SettingCard 
            icon={require('../../assets/icons/camera.png')}
            title='Cart'
          />
          <SettingCard 
            icon={require('../../assets/icons/camera.png')}
            title='Order Details'
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


  header: {
    height: 60,
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  menu: {
    height: 24,
    width: 24,
  },


  // profile container
  profileContainer: {
    height: 100,
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  profileImage: {
    height: '80%',
    width: '35%',
    resizeMode: 'contain'
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
    width: '97%',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
})