import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { WhisperMain } from "@/assets/svg/WhisperMain";

const HomeScreen = () => {
  const navigation = useNavigation<any>(); // Add any type here

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          backgroundColor: "transparent",
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            width: "100%",
            height: "100%",
            marginTop: "10%",
            marginLeft: "15%",
          }}
        >
          <WhisperMain />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
