import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomTextInput = ({ label, inputStyle, labelStyle }: any) => {
  return (
    <View style={[styles.inputFieldContainer, inputStyle]}>
      <Text style={[styles.inputLabel, labelStyle]}>{label}</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  inputFieldContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 30,
  },
  inputLabel: { fontSize: 10, color: '#454545', opacity: 0.8 },
  input: { alignSelf: 'stretch', height: 35, borderBottomWidth: 1 },
})
