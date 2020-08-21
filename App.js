import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Map, Modal} from "./components";
import MarkerForm from "./components/MarkerForm";
import List from "./components/List";

export default function App() {
  const [points, setPoints] = useState([]);
  const [coordinateTemp, setCoordinateTemp] = useState({});
  const [visibilityFilter, setVisibilityFilter] = useState(null); // new_point, all_points, null
  const [visibility, setVisibility] = useState(false);

  const handleLongPress = ({nativeEvent}) => {
    setCoordinateTemp(nativeEvent.coordinate)
    showNewPointForm()
  }

  const handleSubmit = (name) => {
    const newPoint = {
      coordinate: coordinateTemp,
      name: name,
    }

    setPoints([
      ...points,
      newPoint
    ])

    setVisibility(false)
    setCoordinateTemp({})
  }

  const handleCancelSubmit = () => {
    setVisibility(false)
    setCoordinateTemp({})
  }

  const showNewPointForm = () => {
    setVisibilityFilter("new_point")
    setVisibility(true)
  }

  const showPointList = () => {
    setVisibilityFilter("all_points")
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} style="light"/>
      <Map onLongPress={handleLongPress} onListPress={showPointList} points={points}/>
      <Modal visibility={visibility}>
        {visibilityFilter === "new_point" &&
          <MarkerForm handleSubmit={handleSubmit} handleCancelSubmit={handleCancelSubmit}/>
        }
        {visibilityFilter === "all_points" &&
          <List points={points} closeModal={() => setVisibility(false)}/>
        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: "100%"
  },
  button: {
    marginLeft: 15,
    fontWeight: "bold",
    color: "#1a73e8"
  },
  buttonsWrapper: {
    width: "auto",
    flexDirection: "row-reverse",
    alignSelf: "flex-end",
  },
});
