import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { markers, MarkerType } from "../assets/markers";

const INITIAL_REGION: Region = {
  latitude: 54.6582,
  longitude: -1.8608,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default function MapScreen() {
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);

  const onMarkerSelected = (marker: MarkerType) => {
    setSelectedMarker(marker);
  };

  return (
<View style={styles.container}>
      <MapView style={styles.map} initialRegion={INITIAL_REGION}
        onPress={() => setSelectedMarker(null)}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            title={marker.title}
            coordinate={{
              latitude: marker.ride_location.lat,
              longitude: marker.ride_location.lng,
            }}
            onPress={() => onMarkerSelected(marker)}
          >
          </Marker>
        ))}
      </MapView>
      {selectedMarker ? (
    <View style={styles.infoBox}>
      <Text style={styles.title}>{selectedMarker.title}</Text>
      <Text><Text style={styles.label}>Description:</Text> {selectedMarker.description}</Text>
      <Text><Text style={styles.label}>Author:</Text> {selectedMarker.author}</Text>
      <Text><Text style={styles.label}>Date:</Text> {selectedMarker.ride_date}</Text>
      <Text><Text style={styles.label}>Time:</Text> {selectedMarker.ride_time}</Text>
    </View>
  ) : null}
  </View>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1,
},
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6,
  },
  welcome: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  infoBox: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  label: {
    fontWeight: '600',
  },
  map: {
    flex: 1,
  },
});

;