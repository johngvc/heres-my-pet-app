import { Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"

export default function CustomButton({ title, children, onPress, style }: any) {
  return (
    <View style={[styles.button, style]}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    borderColor: "black",
    textAlign: "center",
    borderWidth: 3,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
  },
})
