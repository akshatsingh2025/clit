import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function Splash({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("AuthCheck");
    }, 2000); // 2 sec logo
  }, []);

  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:30}}>🚀 My App</Text>
    </View>
  );
}