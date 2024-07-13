import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const SendMessage = ({
  message,
  time,
}: {
  message: string;
  time: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDE4FF",
    borderRadius: 45,
    paddingHorizontal: 12,
    paddingLeft: 24,
    paddingRight: 16,
    paddingVertical: 16,
    columnGap: 8,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    minHeight: 40,
  },
  message: {
    flex: 1,
    fontSize: 14,
    fontWeight: "light",
    color: "#111827",
    fontFamily: "Sora",
  },
  time: {
    fontFamily: "Sora",
    fontSize: 12,
    opacity: 0.6,
    color: "#111827",
    fontWeight: "light",
  },
});
