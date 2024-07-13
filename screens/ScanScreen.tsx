import BackButton from "@/components/common/BackButton";
import { Loading } from "@/components/common/Loading";
import FlipCam from "@/components/Scan/FlipCam";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

const qrSize = 250;

export default function App() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [isGroupQr, setIsGroupQr] = useState<boolean>(false);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <SafeAreaView style={styles.container}>
      {isGroupQr && <Loading />}
      <CameraView
        style={styles.camera}
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={(props) => {
          setIsGroupQr(true);
          // TODO:  check Qr code data its a group qr code or not

          // its a example check for expo.dev and show loading for 2 seconds
          if (props.data === "https://expo.dev") {
            console.log("Scanned QR code with data: https://expo.dev");
          }
          const promise = new Promise((resolve) => {
            setTimeout(() => {
              setIsGroupQr(false);
            }, 2000);
          });
        }}
      >
        <View style={[styles.buttonContainer, tw`px-3 py-4`]}>
          <BackButton />
          <FlipCam toggleCameraFacing={toggleCameraFacing} />
        </View>
        <View style={styles.overlay}>
          <View style={styles.topOverlay} />
          <View style={styles.centerOverlay}>
            <View style={styles.sideOverlay} />
            <View style={styles.qrContainer}>
              <View style={[styles.corner, styles.topLeftCorner]} />
              <View style={[styles.corner, styles.topRightCorner]} />
              <View style={[styles.corner, styles.bottomLeftCorner]} />
              <View style={[styles.corner, styles.bottomRightCorner]} />
            </View>
            <View style={styles.sideOverlay} />
          </View>
          <View style={styles.bottomOverlay} />
        </View>
      </CameraView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
  },
  button: {
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    backgroundColor: "transparent",
  },
  topOverlay: {
    flex: 1,
    backgroundColor: "black",
    opacity: 0.5,
  },
  centerOverlay: {
    flexDirection: "row",
    borderRadius: 10,
  },
  sideOverlay: {
    flex: 1,
    backgroundColor: "black",
    opacity: 0.5,
  },
  qrContainer: {
    width: qrSize,
    height: qrSize,
  },
  bottomOverlay: {
    flex: 1,
    backgroundColor: "black",
    opacity: 0.5,
  },
  corner: {
    position: "absolute",
    width: 40,
    height: 40,
    borderColor: "#DBC9FF",
  },
  topLeftCorner: {
    top: 0,
    left: 0,
    borderLeftWidth: 6,
    borderTopWidth: 6,
  },
  topRightCorner: {
    top: 0,
    right: 0,
    borderRightWidth: 6,
    borderTopWidth: 6,
  },
  bottomLeftCorner: {
    bottom: 0,
    left: 0,
    borderLeftWidth: 6,
    borderBottomWidth: 6,
  },
  bottomRightCorner: {
    bottom: 0,
    right: 0,
    borderRightWidth: 6,
    borderBottomWidth: 6,
  },
});
