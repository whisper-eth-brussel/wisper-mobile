import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BackSvg } from "@/assets/svg/BackSvg";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
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
      <BackSvg />
    </TouchableOpacity>
  );
};

export default BackButton;
