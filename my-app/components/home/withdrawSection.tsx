import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [hasError, setHasError] = useState(false);
  const handleWithdraw = () => {
    if (!amount || isNaN(parseInt(amount)) || parseFloat(amount) <= 0) {
      setHasError(true);
    } else {
      setHasError(false);
      console.log(`Withdrawing ${amount}`);
    }
  };
  return (
    <View>
      <View className="p-4">
        <Text className="text-base font-medium mb-1">
          Choose amount to withdraw
        </Text>
        <Text className="text-sm text-gray-600 mb-4">
          Withdraw up to the available amount without exiting your algorithmic
          portfolio.
        </Text>
        {hasError ? (
          <View className="flex-row h-14">
            <TextInput
              value={amount}
              onChangeText={(text) => {
                setAmount(text);
                if (hasError) setHasError(false);
              }}
              className="flex-1 h-full border border-[#E9001F] outline-none rounded-l-lg px-4 text-base font-inter-medium"
              placeholder="Amount"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
            <TouchableOpacity
              className="w-28 h-full bg-blue-100 rounded-r-lg items-center justify-center"
              onPress={handleWithdraw}
              activeOpacity={0.7}
            >
              <View className="items-center">
                <View className="w-6 h-6">
                  <Text className="text-blue-600 text-center">₹</Text>
                </View>
                <Text className="text-sm font-inter-bold text-blue-600">
                  Withdraw
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="flex-row h-14 border border-gray-300 rounded-lg overflow-hidden">
            <TextInput
              value={amount}
              onChangeText={(text) => {
                setAmount(text);
              }}
              className="flex-1 h-full px-4 text-base font-inter-medium"
              placeholder="Amount"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
            <TouchableOpacity
              className="w-28 h-full bg-blue-100 items-center justify-center"
              onPress={handleWithdraw}
              activeOpacity={0.7}
            >
              <View className="items-center">
                <View className="w-6 h-6">
                  <Text className="text-blue-600 text-center">₹</Text>
                </View>
                <Text className="text-sm font-inter-bold text-blue-600">
                  Withdraw
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {hasError && (
          <Text className="text-sm font-inter text-[#E9001F] mt-1">
            Enter Valid Coupon Code
          </Text>
        )}
      </View>
    </View>
  );
}
