import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import MapView, { Marker, Callout, Region } from 'react-native-maps';
import { markers, MarkerType } from '../assets/markers';


const INITIAL_REGION: Region = {
  latitude: 54.6582,
  longitude: -1.8608,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
};


export default function App() {
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null)
  
  // console.log(selectedMarker)

  const onMarkerSelected = (marker: MarkerType) => {
    setSelectedMarker(marker);
  };

  // const calloutPressed = () => {
  //   Alert.alert('Callout pressed');
  // };

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={INITIAL_REGION}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          title={marker.name}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude
          }}
          onPress={() => onMarkerSelected(marker)}
        >
          {/* <Callout onPress={calloutPressed}>
            <View>
              <Text>{marker.name}</Text>
            </View>
          </Callout> */}
        </Marker>
      ))}
    </MapView>
  );
};