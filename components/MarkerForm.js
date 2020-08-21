import React, {useState} from "react";
import Input from "./Input";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Button from "./Button";

const MarkerForm = ({handleSubmit, handleCancelSubmit}) => {
  const [name, setName] = useState("");

  const handleChangeText = text => {
    setName(text)
  }

  return (
    <View style={styles.container}>
      <Input
        title="Marker name"
        placeholder="Name"
        autoFocus={true}
        onChangeText={handleChangeText}
      />
      <View style={styles.buttonsWrapper}>
        <Button
          title="Save"
          onPress={() => handleSubmit(name)}
        />
        <Button
          title="Cancel"
          onPress={handleCancelSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  buttonsWrapper: {
    width: "auto",
    flexDirection: "row-reverse",
    alignSelf: "flex-end",
  },
});

export default MarkerForm;
