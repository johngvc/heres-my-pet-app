import { StyleSheet, Text, View, Button } from "react-native"
import React from "react"

export default function Authentication({ navigation }: any) {
  return (
    <View>
      <Text>Authentication</Text>
      <Button
        title="Sign up"
        onPress={() => {
          navigation.replace("Sign Up")
        }}
      ></Button>
      <Button
        title="Login"
        onPress={() => {
          navigation.replace("Log in")
        }}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({})
