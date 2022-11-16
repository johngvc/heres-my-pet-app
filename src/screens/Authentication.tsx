import { StyleSheet, Text, View } from "react-native"
import React from "react"
import CustomButton from "../components/atoms/CustomButton"
import { SvgFromUri, SvgUri } from "react-native-svg"

export default function Authentication({ navigation }: any) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topWave}>
          <SvgUri
            scaleX={1.1}
            scaleY={1}
            width="100%"
            height="100%"
            uri="https://raw.githubusercontent.com/magedeungaro/heres-my-pet/5dd8890bd51c942cd4ef0a5c3192dd4996cdd0b9/app/assets/images/landing_page_top_wave.svg"
          ></SvgUri>
        </View>
        <View style={styles.textsContainer}>
          <Text style={styles.mainText}>Identify and locate your pet</Text>
          <Text style={styles.subText}>
            Protect your pet{" "}
            <Text style={{ color: "#3B74E2" }}>without spending</Text> too much.
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <CustomButton
            onPress={() => {
              navigation.replace("Sign Up")
            }}
            style={styles.upperButton}
          >
            Sign up
          </CustomButton>
          <CustomButton
            style={styles.lowerButton}
            onPress={() => {
              navigation.replace("Log in")
            }}
          >
            Login
          </CustomButton>
        </View>
        <View style={styles.bottomWave}>
          <SvgUri
            scaleX={2}
            scaleY={2}
            width="100%"
            height="100%"
            uri="https://raw.githubusercontent.com/magedeungaro/heres-my-pet/5dd8890bd51c942cd4ef0a5c3192dd4996cdd0b9/app/assets/images/landing_page_bottom_wave.svg"
          ></SvgUri>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  topWave: {
    position: "absolute",
    // borderColor: "red",
    // borderWidth: 2,
    width: "100%",
    height: "25.5%",
    zIndex: -1,
  },
  bottomWave: {
    position: "absolute",
    // borderColor: "red",
    // borderWidth: 2,
    width: "100%",
    height: "25.5%",
    bottom: 0,
    zIndex: -1,
  },
  mainText: {
    fontSize: 24,
    marginBottom: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#949494",
  },
  textsContainer: {
    flex: 0.7,
    color: "#464646",
    // borderColor: "red",
    // borderWidth: 2,
    maxWidth: 250,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flex: 0.3,
    // borderColor: "blue",
    // borderWidth: 2,
    alignItems: "center",
    minWidth: 70,
  },
  upperButton: {
    borderColor: "white",
    borderWidth: 1,
    margin: 5,
    minWidth: 300,
    borderRadius: 10,
    flex: 0.35,
  },
  lowerButton: {
    borderWidth: 0,
    marginTop: 50,
    minWidth: 200,
    flex: 0.2,
  },
})
