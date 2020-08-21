import React from "react";
import {StyleSheet, Text, FlatList, View, Dimensions} from "react-native"
import Button from "./Button";

export default ({points, closeModal}) => {
  return (
    <>
      <Text style={styles.title}>Marker List</Text>
      <View style={styles.list}>
        <FlatList
          data={points.map(x => x.name)}
          renderItem={({item}) => <View style={styles.item}><Text>{item}</Text></View>}
          keyExtractor={item => item}
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <Button
          title="Close"
          onPress={closeModal}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get("window").height * .6
  },
  item:{
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 50,
    justifyContent: "center",
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
  },
  buttonsWrapper: {
    width: "auto",
    flexDirection: "row",
    alignSelf: "flex-end",
    margin: 15,
  },
})
