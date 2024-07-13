import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PlusSvg } from "@/assets/svg/PlusSvg";
import { useNavigation } from "@react-navigation/native";

const ChatyScreen = () => {
  const groups = [
    {
      id: "1",
      picture: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
      name: "Ethereum Global Team Hoşgeldiniz",
      lastMessage:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      time: "10:00",
      unReadMessages: 2,
    },
    {
      id: "2",
      picture: "https://randomuser.me/api/portraits/thumb/women/26.jpg",
      name: "Group 2",
      lastMessage: "Hi",
      time: "11:00",
      unReadMessages: 0,
    },
    {
      id: "3",
      picture: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
      name: "Group 3",
      lastMessage: "Hey",
      time: "12:00",
      unReadMessages: 1,
    },
  ];

  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.header}>
        <Text style={styles.headerText}>Chaty</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <PlusSvg />
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView
        edges={["bottom", "left", "right"]}
        style={styles.groupContainer}
      >
        <FlatList
          data={groups}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Chat", {
                  id: item.id,
                  name: item.name,
                  picture: item.picture,
                })
              }
              style={styles.groupBox}
            >
              <Image
                source={{ uri: item.picture }}
                style={{ width: 48, height: 48, borderRadius: 9999 }}
              />
              <View style={styles.groupMain}>
                <Text style={styles.groupTitle} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.groupLastMessage} numberOfLines={1}>
                  {item.lastMessage}
                </Text>
              </View>
              <View style={styles.groupDetails}>
                <Text style={styles.timeText}>{item.time}</Text>
                {item.unReadMessages > 0 && (
                  <View
                    style={{
                      backgroundColor: "#C8ACFF",
                      width: 20,
                      height: 20,
                      borderRadius: 9999,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 12,
                      }}
                    >
                      {item.unReadMessages}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </SafeAreaView>

      <View
        style={{
          position: "absolute",
          bottom: "10%",
          right: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Create")}
          style={styles.newGroup}
        >
          <PlusSvg stroke="#fff" />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#fff",
            }}
          >
            Group
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatyScreen;

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
    fontSize: 24,
    fontWeight: "900",
    fontFamily: "Sora",
    color: "#111827",
  },
  groupContainer: {
    paddingTop: 18,
    flex: 1,
  },
  groupBox: {
    padding: 16,
    flex: 1,
    flexDirection: "row",
    height: 80,
    columnGap: 12,
    borderBottomColor: "#DBC9FF",
    borderBottomWidth: 1,
  },
  groupMain: {
    justifyContent: "space-between",
    height: "100%",
    flex: 1,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  groupLastMessage: {
    fontSize: 12,
    color: "#111827",
    fontFamily: "Sora",
    opacity: 0.6,
  },
  groupDetails: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  timeText: {
    fontSize: 12,
    color: "#111827",
    opacity: 0.6,
  },
  footer: {
    backgroundColor: "#fff",
    padding: 10,
  },
  newGroup: {
    flexDirection: "row",
    columnGap: 4,
    alignItems: "center",
    backgroundColor: "#C8ACFF",
    borderRadius: 16,
    padding: 16,
    zIndex: 999,
    shadowColor: "#123B93",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowRadius: 16,
  },
});
