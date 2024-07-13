import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@/screens/HomeScreen";
import ChatyScreen from "@/screens/ChatyScreen";
import CreateScreen from "@/screens/CreateScreen";
import ScanScreen from "@/screens/ScanScreen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const Stack = createStackNavigator();

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/Sora.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer independent={true}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Create"
                component={CreateScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Scan"
                component={ScanScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Chaty"
                component={ChatyScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
