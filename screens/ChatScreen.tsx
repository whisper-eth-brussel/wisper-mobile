import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import BackButton from "@/components/common/BackButton";
import ScanSvg from "@/assets/svg/ScanSvg";
import { SendMessage } from "@/components/message/SendMessage";
import { RecieveMessage } from "@/components/message/RecieveMessage";
import { BottomSend } from "@/components/message/BottomSend";

const ChatScreen = ({ route }: { route: any }) => {
  const navigation = useNavigation<any>();

  const [messages, setMessages] = useState([
    {
      id: "1",
      type: "send",
      name: "Kutay",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet ullam, est placeat iste incidunt ex reiciendis. Hic molestiae optio repudiandae, ut minima, tempora, inventore porro similique reiciendis fugiat illo?",
      time: "10:00",
    },
    {
      id: "2",
      name: "Sena",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
      type: "receive",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet ullam, est placeat iste incidunt ex reiciendis. Hic molestiae optio repudiandae, ut minima, tempora, inventore porro similique reiciendis fugiat illo?",
      time: "10:01",
    },
    {
      id: "3",
      name: "Sena",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
      type: "receive",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet ullam, est placeat iste incidunt ex reiciendis. Hic molestiae optio repudiandae, ut minima, tempora, inventore porro similique reiciendis fugiat illo?",
      time: "10:01",
    },
  ]);

  const sendMessage = (message: string) => {
    setMessages([
      ...messages,
      {
        id: Math.random().toString(),
        type: "send",
        message: message,
        time: new Date().toLocaleTimeString(),
        thumbnail: "https://randomuser.me/api/portraits",
        name: "Kutay",
      },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBox}>
          <BackButton iconColor="#111827" />
          <View style={styles.headerBox}>
            <Image
              source={{ uri: route.params.picture }}
              style={tw`w-11 h-11 rounded-full`}
            />
            <Text numberOfLines={1} style={styles.headerText}>
              {route.params.name}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Scan")}>
          <ScanSvg />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: 32,
          paddingRight: 32,
          marginTop: 12,
          flexDirection: "column",
        }}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            item.type === "send" ? (
              <SendMessage message={item.message} time={item.time} />
            ) : (
              <RecieveMessage
                message={item.message}
                time={item.time}
                name={item.name}
                thumbnail={item.thumbnail}
              />
            )
          }
        />
      </View>
      <BottomSend sendMessage={sendMessage} />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#EFE7FF",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 12,
    flexDirection: "row",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "900",
    fontFamily: "Sora",
    color: "#111827",
    flex: 1,
  },
  headerBox: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
    flex: 1,
  },
});
