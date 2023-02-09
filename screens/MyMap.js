import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export const MyMap = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [marker, setMarker] = useState(null)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let marbleBrewery = await Location.geocodeAsync("101 marble Albuquerque")
      setMarker(marbleBrewery)
      
    })();
   //  console.log("marker", marker)  
      
  }, []);

  // let text = 'Waiting..';
  if (errorMsg) {
    console.log(errorMsg);
  } else if (location) {
    //   text = JSON.stringify(location);
    console.log(location);
  }
  return (
    <View
      style={{
        width: "90%",
        height: "60%",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 2,
        borderColor: "#444444",
        borderRadius: 2,
      }}
    >
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          //  latitude: 35.106,
          //  longitude: -106.629,
          latitude: location ? location.coords.latitude : 35.106,
          longitude: location ? location.coords.longitude : -106.629,
          latitudeDelta: 0.0922 * 3.5,
          longitudeDelta: 0.0421 * 3.5,
        }}
      >
        {location && <Marker
         //  coordinate={{
         //    latitude: location.coords.latitude,
         //    longitude: location.coords.longitude,
         //  }}
          coordinate={location.coords}
          pinColor="linen"
          title="You are here"
        />}
        {marker && <Marker
          coordinate={{
            latitude: marker[0].latitude,
            longitude: marker[0].longitude,
          }}
          pinColor="green"
          title="Marble Brewery"
        />}
      </MapView>
    </View>
  );
};
