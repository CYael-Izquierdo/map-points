import React, {useState, useEffect} from "react";
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import * as Location from "expo-location";
import MapView, {Marker} from "react-native-maps";
import MapPanel from "./MapPanel";

export default ({onLongPress, onListPress, points}) => {
  const [showMarkers, setShowMarkers] = useState(true);
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    const {status} = await Location.requestPermissionsAsync()
    if (status !== "granted") {
      return Alert.alert("The app has not the necessary permission to get the location")
    }
    const loc = await Location.getCurrentPositionAsync({})
    setLocation(loc.coords)
  }

  useEffect(() => {
    getLocation().then()
  }, [])

  return (
    <View style={styles.map}>
      {location.latitude && location.longitude
        ?
        <View style={styles.map}>
          <MapView
            style={styles.map}
            onLongPress={onLongPress}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005
            }}
          >
            {showMarkers &&
              points.map(point =>
                <Marker
                  coordinate={point.coordinate}
                  title={point.name}
                  key={point.name}
                />
              )
            }
          </MapView>
          <View style={styles.buttonContainer}>
            <MapPanel
              showMarkers={showMarkers}
              setShowMarkers={setShowMarkers}
              onListPress={onListPress}
            />
          </View>
        </View>
        :
        <View style={styles.center}>
          <ActivityIndicator size="large"/>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',//use absolute position to show button on top of the map
    top: '0%', //for center align
    flex: 1,
    width: "100%"
  },
  map: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})