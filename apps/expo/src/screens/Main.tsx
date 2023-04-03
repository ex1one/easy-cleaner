import React, { useEffect, useRef, useState } from "react";

import {
  View,
  SafeAreaView,
  Modal,
  Text,
  Animated,
  ActivityIndicator,
  Pressable,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";

export const Main = () => {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const doToggleModal = () => setIsOpenModal((prev) => !prev);

  useEffect(() => {
    if (isOpenModal) {
      timer.current = setTimeout(() => {
        setIsOpenModal(false);
      }, 1000 * 600);
    }

    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [isOpenModal]);

  return (
    <SafeAreaView className="flex-auto">
      <Animated.View className="h-screen flex-col items-center justify-center">
        <Pressable
          onPress={doToggleModal}
          android_ripple={{
            color: "#fff",
          }}
          className={
            "h-40 w-40 flex-col items-center justify-center rounded-full border border-black/40 bg-[#0089ff] shadow-2xl outline-none transition duration-1000 ease-in-out hover:bg-[#0089ff]/90"
          }
        >
          <Text className="text-3xl font-bold uppercase tracking-widest text-white">
            Clean
          </Text>
        </Pressable>
      </Animated.View>

      <Modal
        onRequestClose={doToggleModal}
        animationType="fade"
        presentationStyle="fullScreen"
        visible={isOpenModal}
        className="bg-white"
      >
        <View className="relative flex-row items-center justify-center bg-[#0089ff] py-4">
          <View className="relative flex-[1]">
            <Pressable
              android_ripple={{
                color: "#fff",
                borderless: true,
              }}
              className="w-14"
              onPress={doToggleModal}
            >
              <Feather
                name="arrow-left"
                size={30}
                style={{ color: "#fff", paddingLeft: 10 }}
              />
            </Pressable>
          </View>

          <Text className="mx-auto flex-[2] text-2xl text-white">Cleaning</Text>
        </View>

        <View className="relative flex h-full items-center justify-center">
          <ActivityIndicator color="#0089ff" size={60} className="" />
        </View>
      </Modal>
    </SafeAreaView>
  );
};
