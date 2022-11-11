import { StyleSheet, Text, View, Button } from "react-native"
import React from "react"

export default function Login({ navigation }: any) {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Log in"
        onPress={() => {
          navigation.replace("Home")
        }}
      ></Button>
      <Button
        title="Sign up instead"
        onPress={() => {
          navigation.replace("Sign Up")
        }}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({})
