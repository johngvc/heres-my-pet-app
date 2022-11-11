import { StyleSheet, Text, View, Button } from "react-native"
import React from "react"

export default function Welcome({ navigation }: any) {
  return (
    <View>
      <Text>Welcome</Text>
      <Button
        title="See how it works"
        onPress={() => {
          navigation.replace("Home")
        }}
      ></Button>
      <Button
        title="Skip"
        onPress={() => {
          navigation.replace("Home")
        }}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({})
