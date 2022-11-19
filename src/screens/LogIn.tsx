import { StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native'
import React from 'react'
import CustomButton from '../components/atoms/CustomButton'
import CustomTextInput from '../components/atoms/CustomTextInput'

const logoImage = require('../assets/heresmypet_logo.png')

export default function Login({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={logoImage}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>LOG IN</Text>
      </View>
      <View style={styles.inputFieldsContainer}>
        <CustomTextInput label="USERNAME" />
        <CustomTextInput label="PASSWORD" password={true} />
        <CustomButton
          onPress={() => {
            Alert.alert('Forgot to implement forgot password screen')
          }}
          buttonStyle={styles.forgotPasswordButton}
          textStyle={styles.forgotPasswordText}
        >
          forgot password?
        </CustomButton>
      </View>

      <View style={styles.buttonsContainer}>
        <CustomButton
          onPress={() => {
            navigation.replace('Home')
          }}
          buttonStyle={styles.upperButton}
          textStyle={styles.upperButtonText}
        >
          Log in
        </CustomButton>
        <CustomButton
          onPress={() => {
            navigation.replace('Sign Up')
          }}
          buttonStyle={styles.lowerButton}
          textStyle={styles.lowerButtonText}
        >
          Sign up instead
        </CustomButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    paddingHorizontal: 60,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  inputFieldsContainer: {
    // borderColor: 'red',
    // borderWidth: 2,
    alignSelf: 'stretch',
  },
  logoContainer: {
    // borderColor: 'red',
    // borderWidth: 2,
    justifyContent: 'center',
  },
  logoImage: {
    height: 120,
    width: 200,
    // borderColor: 'red',
    // borderWidth: 2,
    resizeMode: 'cover',
  },
  titleContainer: {
    // borderColor: 'red',
    // borderWidth: 2,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  buttonsContainer: {
    // borderColor: 'red',
    // borderWidth: 2,
    alignSelf: 'stretch',
  },
  upperButton: {
    borderWidth: 0,
    backgroundColor: '#045A7C',
    borderRadius: 5,
    height: 55,
    marginBottom: 35,
  },
  lowerButton: {
    borderWidth: 0,
  },
  upperButtonText: {
    fontSize: 17,
    fontWeight: 'normal',
  },
  lowerButtonText: {
    color: 'black',
    fontSize: 12,
    textDecorationLine: 'underline',
    fontWeight: 'normal',
  },
  forgotPasswordButton: {
    borderWidth: 0,
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'normal',
  },
})
