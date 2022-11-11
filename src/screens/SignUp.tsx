import { StyleSheet, Text, View, Button } from "react-native"
import React from "react"

export default function Signup({ navigation }: any) {
  return (
    <View>
      <Text>Signup</Text>
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
  )
}

const styles = StyleSheet.create({})
