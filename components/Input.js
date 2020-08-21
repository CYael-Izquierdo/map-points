import React, {useState} from "react";
import {Text, TextInput, View, StyleSheet, Dimensions} from "react-native";

export default ({title, ...rest}) => {

  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...rest} style={styles.input}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get("window").width / 1.5
  },
  input: {
    borderLeftColor: "#666",
    borderLeftWidth: 2,
    paddingLeft: 5,
    marginTop: 10,
    marginBottom: 10,
  },
})