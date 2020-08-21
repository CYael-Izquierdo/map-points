import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Button = ({title, ...rest}) => {
    return (
      <TouchableOpacity
        {...rest}
      >
        <Text style={styles.button}>{title}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 15,
    fontWeight: "bold",
    color: "#1a73e8"
  },
});

export default Button;
