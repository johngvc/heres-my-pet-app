import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native"
import React from "react"

const logoImage = require("../assets/heresmypet_logo.png")

export default function Signup({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        source={logoImage}
        resizeMode="contain"
      ></Image>
      <View style={styles.inputFieldsContainer}>
        <View style={styles.inputFieldContainer}>
          <Text>Input 1</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.inputFieldContainer}>
          <Text>Input 1</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.inputFieldContainer}>
          <Text>Input 1</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          title="Sign up"
          onPress={() => {
            navigation.replace("Welcome")
          }}
        ></Button>
        <Button
          title="Log in instead"
          onPress={() => {
            navigation.replace("Log in")
          }}
        ></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
  },
  inputFieldsContainer: {
    flex: 0.4,
  },
  inputFieldContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 30,
    // borderColor: "red",
    // borderWidth: 2,
  },
  input: {
    alignSelf: "stretch",
    height: 40,
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    borderColor: "red",
    borderWidth: 2,
    flex: 0.3,
  },
  logoImage: {
    height: 120,
    width: 200,
    // borderColor: "red",
    // borderWidth: 2,
    resizeMode: "cover",
  },
})
