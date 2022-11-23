import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/atoms/CustomButton'
import { SvgUri } from 'react-native-svg'

const logoImage = require('../assets/heresmypet_logo.png')

export default function Signup({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.topWave}>
        <SvgUri
          scaleX={1.5}
          scaleY={1.5}
          height={'100%'}
          width={'100%'}
          uri="https://raw.githubusercontent.com/magedeungaro/heres-my-pet/5dd8890bd51c942cd4ef0a5c3192dd4996cdd0b9/app/assets/images/onboarding-top-wave.svg"
        ></SvgUri>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>CONGRATULATIONS!</Text>
      </View>
      <View style={styles.congratulationsImageContainer}>
        <SvgUri
          scaleX={1.5}
          scaleY={1.5}
          height={'100%'}
          width={'100%'}
          uri="https://raw.githubusercontent.com/magedeungaro/heres-my-pet/5dd8890bd51c942cd4ef0a5c3192dd4996cdd0b9/app/assets/images/congratulations.svg"
        ></SvgUri>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton
          onPress={() => {
            navigation.replace('Home')
          }}
          buttonStyle={styles.upperButton}
          textStyle={styles.upperButtonText}
        >
          See how it works
        </CustomButton>
        <CustomButton
          onPress={() => {
            navigation.replace('Home')
          }}
          buttonStyle={styles.lowerButton}
          textStyle={styles.lowerButtonText}
        >
          Skip
        </CustomButton>
      </View>
      <View style={styles.bottomWave}>
        <SvgUri
          scaleX={1.5}
          scaleY={1.5}
          height={'100%'}
          width={'100%'}
          uri="https://raw.githubusercontent.com/magedeungaro/heres-my-pet/5dd8890bd51c942cd4ef0a5c3192dd4996cdd0b9/app/assets/images/onboarding-bottom-wave.svg"
        ></SvgUri>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    paddingHorizontal: 60,
    paddingVertical: 80,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  congratulationsImageContainer: {
    height: 200,
    alignSelf: 'stretch',
    // borderColor: 'red',
    // borderWidth: 2,
    justifyContent: 'center',
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
    fontSize: 17,
    fontWeight: 'bold',
  },
  bottomWave: {
    position: 'absolute',
    bottom: -60,
    zIndex: 1,
    width: '100%',
    height: '25.5%',
  },
  topWave: {
    position: 'absolute',
    top: -70,
    zIndex: -1,
    width: '100%',
    height: '25.5%',
  },
})
