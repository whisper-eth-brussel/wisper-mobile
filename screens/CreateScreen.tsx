import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import BackButton from "@/components/common/BackButton";
import { TextInput } from "react-native-gesture-handler";
import { CloseSvg } from "@/assets/svg/CloseSvg";
import { PencilSvg } from "@/assets/svg/PencilSvg";
import { ShareSvg } from "@/assets/svg/ShareSvg";
import { useNavigation } from "@react-navigation/native";
import { RightArrow } from "@/assets/svg/RightArrow";

const CreateScreen = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const [name, setName] = useState<string>("");

  const [members, setMembers] = useState<number>(0);

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View
        style={{
          alignItems: "flex-start",
          paddingLeft: 12,
          marginTop: 16,
          width: "100%",
        }}
      >
        <BackButton />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          position: "relative",
          marginTop: 16,
          marginLeft: 16,
          marginRight: 16,
        }}
      >
        <View
          style={{
            gap: 32,
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#EDEDED",
              borderRadius: 9999,
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                flex: 1,
              }}
            >
              <View
                style={{
                  position: "relative",
                }}
              >
                <View
                  style={{
                    zIndex: 50,
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    backgroundColor: "#DBC9FF",
                    borderRadius: 9999,
                    width: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 20,
                  }}
                >
                  <PencilSvg />
                </View>
                {uploadedImage ? (
                  <Image
                    source={{ uri: uploadedImage }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 9999,
                      borderColor: "#DBC9FF",
                      borderWidth: 7,
                    }}
                  />
                ) : (
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "blue",
                      borderRadius: 9999,
                      borderColor: "#DBC9FF",
                      borderWidth: 7,
                    }}
                  ></View>
                )}
              </View>
              <TextInput
                editable
                multiline
                onChangeText={(text) => setName(text)}
                value={name}
                style={{
                  color: "#111827",
                  fontSize: 24,
                  fontWeight: "600",
                  fontFamily: "Sora",
                  flex: 1,
                }}
                placeholder="Enter group name"
                placeholderTextColor={"#333"}
              />
            </View>
            {name && (
              <TouchableOpacity onPress={() => setName("")}>
                <CloseSvg />
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              gap: 16,
              flexDirection: "column",
              width: "100%",
            }}
          >
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Number of members</Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 8,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    if (members > 0) {
                      setMembers(members - 1);
                    }
                  }}
                >
                  <Text
                    style={[
                      styles.listItemText,
                      {
                        fontSize: 20,
                      },
                    ]}
                  >
                    -
                  </Text>
                </TouchableOpacity>
                <Text style={[styles.listItemText]}>{members}</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (members < 10) {
                      setMembers(members + 1);
                    }
                  }}
                >
                  <Text
                    style={[
                      styles.listItemText,
                      {
                        fontSize: 20,
                      },
                    ]}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Invite with link</Text>
              <ShareSvg />
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 16,
              }}
            >
              <Image
                source={require("@/assets/png/barcod.png")}
                style={{ width: 200, height: 200 }}
              />
            </View>
          </View>
        </View>
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
          onPress={() =>
            navigation.navigate("Chat", {
              id: "1",
              name: name,
              picture: uploadedImage,
            })
          }
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
            Join Group
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
    </SafeAreaView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#EDEDED",
    borderRadius: 9999,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  listItemText: {
    fontSize: 16,
    fontFamily: "Sora",
    fontWeight: "600",
    color: "#111827",
  },
  buttonText: {
    fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "regular",
  },
});
