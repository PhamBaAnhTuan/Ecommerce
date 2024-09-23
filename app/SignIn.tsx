import { Dimensions, Image, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
// Context
import { useTheme } from '../context/ThemeContext';

const SignIn = ({navigation}) => {
  const {theme} = useTheme();
  return (
    <SafeAreaView style={[styles.safeView, {backgroundColor: theme.orange}]}>
      <StatusBar backgroundColor={'#ff7233'}/>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/images/logo2.png')} resizeMode='contain' />
      </View>
      <View style={styles.shopeeTextContainer}>
        <Image style={styles.shopeeText} source={require('../assets/images/shopeeText.png')} resizeMode='contain' />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.emailInputContainer}>
          <Text style={[styles.emailText, {color: theme.text}]}>Email</Text>
          <TextInput style={[styles.emailInput, {backgroundColor: theme.lightOrange}]} />
        </View>

        <View style={styles.emailInputContainer}>
          <Text style={[styles.emailText, {color: theme.text}]}>Password</Text>
          <TextInput style={[styles.emailInput, {backgroundColor: theme.lightOrange}]} secureTextEntry={true} />
        </View>

        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={{fontSize: 12, color: theme.text}}>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 12, color: theme.text}}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.signInBtnContainer}>
        <TouchableOpacity style={[styles.signInBtn, {backgroundColor: theme.lightOrange}]} onPress={() => navigation.navigate('TabNavigator')}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.otherMethodContainer}>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: theme.text}}>Not a member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: theme.bgc}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#F1B720',
  },


  // Logo container
  logoContainer: {
    height: '25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1
  },
  logo: {
  },

  shopeeTextContainer: {
    height: 'auto',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1
  },
  shopeeText: {
    // alignSelf: 'center',
  },


  // Input container
  inputContainer: {
    height: 250,
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },

  emailInputContainer: {
    height: 'auto',
    width: '85%',
    // borderWidth: 1,
    marginBottom: 10
  },
  emailText: {
    fontSize: 14,
    fontWeight: 'bold',
    // marginBottom: 5
  },
  emailInput: {
    height: 40,
    // borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#ffa831',
    paddingLeft: 10,
  },


  // Forgot Password container
  forgotPasswordContainer: {
    height: 'auto',
    width: '85%',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },


  // Sign in btn container
  signInBtnContainer: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
  },

  signInBtn: {
    height: 40,
    width: '85%',
    backgroundColor: '#644f19',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '35%'
  },
  signInText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white'
  },

  // Other method container
  otherMethodContainer:{
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})