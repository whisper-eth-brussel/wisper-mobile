import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { PaperSvg } from "@/assets/svg/PaperSvg";
import { VoiceSvg } from "@/assets/svg/VoiceSvg";
import tw from "tailwind-react-native-classnames";
import { UpArrow } from "@/assets/svg/UpArrow";

export const BottomSend = ({
  sendMessage,
}: {
  sendMessage: (message: string) => void;
}) => {
  const [value, onChangeText] = useState<string>("");
  console.log(value);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={() => onChangeText("")}
          style={[
            {
              position: "absolute",
              left: 16,
              zIndex: 50,
              padding: 4,
              transform: [{ translateY: 4 }],
            },
            tw`top-1/2`,
          ]}
        >
          <PaperSvg />
        </TouchableOpacity>
        <View
          style={[
            {
              position: "absolute",
              right: 16,
              padding: 4,
              zIndex: 50,
              transform: [{ translateY: 4 }],
            },
            tw`top-1/2`,
          ]}
        >
          <VoiceSvg />
        </View>
        <TextInput
          editable
          multiline
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder="Write a message"
          style={styles.input}
          placeholderTextColor={"#bfbfbf"}
        />
      </View>
      <TouchableOpacity
        disabled={!value}
        onPress={() => {
          if (value) {
            sendMessage(value);
            onChangeText("");
          }
        }}
        style={[
          tw`w-10 h-10 rounded-full items-center justify-center`,
          {
            backgroundColor: "#C8ACFF",
          },
        ]}
      >
        <UpArrow />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 16,
    gap: 8,
    flexDirection: "row",
    minHeight: 48,
    alignItems: "center",
    marginTop: 8,
  },
  inputContainer: {
    backgroundColor: "#F6F1FF",
    borderRadius: 45,
    padding: 16,
    flex: 1,
  },
  input: {
    paddingLeft: 32,
    paddingRight: 24,
    paddingHorizontal: 12,
    minHeight: 16,
  },
});
