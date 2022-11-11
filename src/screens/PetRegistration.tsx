import { StyleSheet, Text, View, Button } from "react-native"
import React from "react"

export default function PetRegistration({ navigation }: any) {
  return (
    <View>
      <Text>PetRegistration</Text>
      <Button
        title="Add pet"
        onPress={() => {
          navigation.replace("Pet profile")
        }}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({})
