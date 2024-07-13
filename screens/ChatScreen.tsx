import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

const ChatScreen = ({ route }: { route: any }) => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text>{route.params?.name}</Text>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
