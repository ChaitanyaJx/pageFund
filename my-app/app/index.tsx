import React from "react";
import { View, StatusBar, ScrollView } from "react-native";
import Header from "@/components/home/header";
import Amount from "@/components/home/amount";
import Withdraw from "@/components/home/withdrawSection";
import Exit from "@/components/home/exitSection";
export default function App() {
  return (
    <View className="flex-1 bg-white min-h-screen">
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <Header />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          flex: 1,
          margin: 0,
          paddingBottom: 0,
        }}
      >
        {/* <Amount /> */}
        <Amount />
        {/* Withdraw Amount Section */}
        <Withdraw />
        {/* Spacer to push content to bottom */}
        <View className="flex-1 " />
        {/* Exit Portfolio Section */}
        <Exit />
      </ScrollView>
    </View>
  );
}
