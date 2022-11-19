import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomButton({
  children,
  onPress,
  buttonStyle,
  textStyle,
}: any) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.button, buttonStyle]}>
        <Text style={[styles.text, textStyle]}>{children}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderColor: 'black',
    textAlign: 'center',
    borderWidth: 3,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
  },
})
