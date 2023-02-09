import { View, Image, Button } from "react-native";

export const Poster = ({ route, navigation }) => {
  const uri = route.params.uri;
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{
          height: "90%",
          width: "90%",
          borderColor: "#555",
          borderWidth: 2,
          borderRadius: 4,
        }}
        source={{ uri: uri }}
      />
      <View style={{ height: 10 }}></View>
      <Button
        color="#aabbcc"
        title="Back to Movie Details"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
