import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] font-semibold text-3xl">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[30px] font-bold">
          Good Moments
        </Text>

        <Text className="text-[#3C6072] text-[42px] text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          ultricies, nisl sit amet aliquam lacinia
        </Text>
      </View>

      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

      <View className="flex-1 relative justify-center items-center">
        <Animatable.Image
          animation="fadeInUpBig"
          easing="ease-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />
        <View className="absolute w-24 h-24 bottom-20 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
          <TouchableOpacity>
            <Animatable.View
              animation="pulse"
              easing="ease-in-out"
              iterationCount="infinite"
              className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
            >
              <Text className="text-gray-50 text-[36px] font-semibold">GO</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
