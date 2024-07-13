import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Loading = () => (
  <SafeAreaView style={[styles.container]}>
    <ActivityIndicator size="large" color="#DBC9FF" />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    zIndex: 50,
  },
});
