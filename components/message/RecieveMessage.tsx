import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export const RecieveMessage = ({
  message,
  time,
  name,
  thumbnail,
}: {
  message: string;
  time: string;
  name: string;
  thumbnail: string;
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <View style={styles.messageContainer}>
        <View
          style={{
            justifyContent: "space-between",
            gap: 4,
            flex: 1,
          }}
        >
          <Text
            style={[
              styles.message,
              {
                fontSize: 16,
              },
            ]}
          >
            {name}
          </Text>
          <Text style={styles.message}>{message}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "auto",
    marginTop: 8,
    minHeight: 60,
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-end",
  },
  thumbnail: {
    width: 32,
    height: 32,
    borderRadius: 9999,
  },
  messageContainer: {
    paddingLeft: 24,
    paddingRight: 16,
    paddingVertical: 16,
    gap: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C6ADF8",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    borderBottomRightRadius: 45,
  },
  message: {
    fontSize: 14,
    fontWeight: "light",
    color: "#FFFFFF",
    fontFamily: "Sora",
    flex: 1,
  },
  time: {
    fontFamily: "Sora",
    fontSize: 12,
    color: "#fff",
    fontWeight: "light",
    opacity: 0.6,
  },
});
