import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { WhisperMain } from "@/assets/svg/WhisperMain";
import { ChatSvg } from "@/assets/svg/Chat";
import { PlusSvg } from "@/assets/svg/PlusSvg";
import { RightArrow } from "@/assets/svg/RightArrow";

const HomeScreen = () => {
  const navigation = useNavigation<any>(); // Add any type here

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          backgroundColor: "transparent",
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            width: "100%",
            height: "100%",
            marginTop: "10%",
            marginLeft: "15%",
          }}
        >
          <WhisperMain />
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 16,
            top: 16,
            backgroundColor: "#E7DBFF",
            width: 54,
            height: 54,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 9999,
          }}
          onPress={() => navigation.navigate("Chaty")}
        >
          <ChatSvg />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            width: "90%",
            left: "5%",
            top: "45%",
            justifyContent: "center",
            rowGap: 12,
          }}
        >
          <Text style={styles.mainText}>
            Wisper your secrets asdsad securely.
          </Text>
          <Text style={styles.subText}>
            The secure chat app for privacy and trust, knowing your secrets are
            always protected.
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            width: "90%",
            left: "5%",
            bottom: "5%",
            justifyContent: "center",
            alignItems: "center",
            rowGap: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Create")}
            style={[
              tw`w-full px-5 py-3 flex-row justify-between items-center`,
              {
                height: 70,
              },
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  color: "#24252A",
                },
              ]}
            >
              Create a group
            </Text>
            <PlusSvg />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Scan")}
            style={[
              tw`w-full flex-row rounded-full px-5 py-3 justify-between items-center`,
              {
                backgroundColor: "#24252A",
                height: 70,
              },
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  color: "#fff",
                },
              ]}
            >
              Scan QR
            </Text>
            <View
              style={{
                backgroundColor: "#DBC9FF",
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 9999,
              }}
            >
              <RightArrow />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainText: {
    fontFamily: "Sora",
    fontSize: 32,
    fontWeight: "regular",
    color: "#24252A",
  },
  subText: {
    fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "light",
    color: "#808080",
  },
  buttonText: {
    fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "regular",
  },
});
