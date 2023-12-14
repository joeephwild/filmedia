import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import CarouselCompoent from "../../components/Carousel";
import AllSongs from "../../components/expolore/AllSongs";
import AllAlbums from "../../components/expolore/AllAlbums";
import AllArtist from "../../components/expolore/AllArtist";

export default function TabOneScreen() {
  return (
    <SafeAreaView className="min-h-screen flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: 100,
          flex: 1,
          minHeight: "100%",
        }}
      >
        {/** header view */}

        <View className="pb-[40px]">
          <View className="flex-row items-center p-3 justify-between">
            <View className="flex-row items-start space-x-4">
              <Image
                source={require("../../assets/images/profile.jpg")}
                className="w-[50px] g-[50px] rounded-full object-contain"
              />
              <View>
                <Text className="text-[18px] font-semibold text-[#fff]">
                  Sarwar Jahan
                </Text>
                <Text className="text-[14px] text-[#DEDEDE] font-medium">
                  Gold Member
                </Text>
              </View>
            </View>
            <FontAwesome5 name="bell" color="#fff" size={20} />
          </View>
          <View className="flex-row items-center p-3 justify-between">
            <Text className="text-[26px] font-semibold text-[#fff] w-[50%]">
              Listen The Latest Musics
            </Text>
            <View className="bg-transparent border border-[#fff] flex-row items-center space-x-3 w-[50%] p-3 rounded-[40px]">
              <FontAwesome5 name="search" color="#fff" size={10} />
              <TextInput
                placeholder="Search"
                placeholderTextColor="#fff"
                className="w-fit text-[#fff]"
              />
            </View>
          </View>
        </View>

        {/* <CarouselCompoent /> */}
        <View className="space-y-[20px]">
          <AllSongs />
          <AllAlbums />
          <AllArtist />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
