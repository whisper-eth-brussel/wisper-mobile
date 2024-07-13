import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/common/BackButton";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { RightArrow } from "@/assets/svg/RightArrow";

const JoinGroupScreen = () => {
  const navigation = useNavigation<any>();
  const group = {
    id: "1",
    name: "ETH Global",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
    member: 22,
    members: [
      {
        id: "1",
        name: "Kutay",
        type: "Online",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
      },
      {
        id: "2",
        name: "Kutay",
        type: "Online",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
      },
      {
        id: "3",
        name: "Kutay",
        type: "Online",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
      },
    ],
  };
  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
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
          gap: 12,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: group.thumbnail,
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 9999,
            borderColor: "#DBC9FF",
            borderWidth: 3,
          }}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              fontFamily: "Sora",
              color: "#111827",
            }}
          >
            {group.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "light",
              fontFamily: "Sora",
              color: "#111827",
            }}
          >
            {group.member} member
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#F6F1FF",
          marginTop: 24,
        }}
      >
        <FlatList
          style={{
            paddingLeft: 16,
            paddingTop: 12,
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                paddingTop: 12,
              }}
            >
              <Image
                source={{ uri: item.thumbnail }}
                style={{ width: 40, height: 40, borderRadius: 9999 }}
              />
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    fontFamily: "Sora",
                    color: "#111827",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "light",
                    opacity: 0.6,
                    fontFamily: "Sora",
                    color: "#111827",
                  }}
                >
                  {item.type}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          data={group.members}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: "10%",
          left: 16,
          right: 16,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Chat", {
              id: group.id,
              name: group.name,
              picture: group.thumbnail,
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
    </SafeAreaView>
  );
};

export default JoinGroupScreen;

const styles = StyleSheet.create({});
