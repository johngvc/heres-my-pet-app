import { StyleSheet, Text, View, Button } from "react-native"
import React from "react"

export default function MyPets({ navigation }: any) {
  return (
    <View>
      <Text>MyPets</Text>
      <Button
        title="Add a new pet"
        onPress={() => {
          navigation.navigate("Register my pet")
        }}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({})
