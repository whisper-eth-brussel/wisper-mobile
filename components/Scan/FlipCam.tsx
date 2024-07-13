import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CameraSvg } from "@/assets/svg/CameraSvg";

const FlipCam = ({
  toggleCameraFacing,
}: {
  toggleCameraFacing: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={toggleCameraFacing}
      style={{
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CameraSvg />
    </TouchableOpacity>
  );
};

export default FlipCam;
