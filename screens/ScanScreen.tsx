import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

const ScanScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text>Scan Screen</Text>
    </SafeAreaView>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({});
