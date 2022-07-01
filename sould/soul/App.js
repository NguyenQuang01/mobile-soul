import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Home from "./screens/home";
import Start from "./screens/start";
import SignUpAndIn from "./screens/signUpAndIn";
import SignIn from "./screens/signIn";
import SignUp from "./screens/signUp";
import Topic from "./screens/topic";
import Book from "./screens/book";
import Books from "./screens/books";
import BookReview from "./screens/bookReview";
import Musics from "./screens/musics";
import Expertss from "./screens/expertss";
import Music from "./screens/music";
import Experts from "./screens/experts";
import Me from "./screens/me";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Topic}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Books"
        component={Books}
        options={{
          tabBarIcon: () => <Octicons name="book" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Musics"
        component={Musics}
        options={{
          tabBarIcon: () => (
            <Ionicons name="musical-notes-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Experts"
        component={Experts}
        options={{
          tabBarIcon: () => (
            <Feather name="phone-call" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="people" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="SignUpAndIn" component={SignUpAndIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen name="Music" component={Music} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
