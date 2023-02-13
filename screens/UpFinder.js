import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";
import { DeviceMotion } from "expo-sensors";
import { useState, useEffect } from "react";

export const UpFinder = () => {
  const [whatsUp, setWhatsUp] = useState("0deg");
  
  // alpha, beta and gamma are measured in degrees per second around axis
  const [{ alpha, beta, gamma }, setMotionInfo] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  const [subscription, setSubscription] = useState(null);

  const subscribe = () => {
    DeviceMotion.setUpdateInterval(16);
    setSubscription(
      DeviceMotion.addListener((result) => {
        setMotionInfo(result.rotation);
      })
    );
  };

  const unsubscribe = () => {
    subscribe && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    let angle = - gamma * (180 / Math.PI);
    // TODO make it work when upside down too!
    setWhatsUp(`${angle}deg`);
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Toggle Upwards Subscription"
        onPress={subscription ? unsubscribe : subscribe}
      />
      <Text>alpha: {alpha}</Text>
      <Text>beta: {beta}</Text>
      <Text>gamma: {gamma}</Text>
      <ImageBackground
        source={require("../assets/balloon.png")}
        style={[
          styles.balloon,
          {
            transform: [{ rotate: whatsUp }],
          },
        ]}
      >
        <Text style={{ color: "white", fontSize: 25 }}>UpFinder</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  balloon: {
    height: 1262 * 0.25,
    width: 1050 * 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
});
