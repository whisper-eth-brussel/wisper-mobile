import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BackSvg } from "@/assets/svg/BackSvg";
import { useNavigation } from "@react-navigation/native";

const BackButton = ({ iconColor }: { iconColor?: string }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackSvg stroke={iconColor ? iconColor : "#111827"} />
    </TouchableOpacity>
  );
};

export default BackButton;
