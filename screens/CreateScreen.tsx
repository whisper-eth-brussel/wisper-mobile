import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

const CreateScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text>Create Screen</Text>
    </SafeAreaView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
