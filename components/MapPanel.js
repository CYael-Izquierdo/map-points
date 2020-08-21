import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default ({showMarkers, setShowMarkers, onListPress}) => {

  return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowMarkers(!showMarkers)}
          >
            <Text style={styles.buttonTitle}>{showMarkers ? "Hide Markers" : "Show Markers"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={onListPress}
          >
            <Text style={styles.buttonTitle}>List</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    alignItems: "center",
    padding: 10,
  },
  buttonTitle: {
    fontSize: 18,
    color: "#000",
    fontWeight: 'bold'
  },
})

