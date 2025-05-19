import { View, Text, TouchableOpacity } from "react-native";
import { ChevronLeft } from "react-native-feather";

export default function Header() {
  return (
    <View className="h-14 flex-row items-center px-4">
      <TouchableOpacity>
        <ChevronLeft width={24} height={24} color="#253174" />
      </TouchableOpacity>
      <Text className="flex-1 text-[#253174] text-xl font-inter-bold ml-2">
        Withdraw
      </Text>
      <View className="w-6" />
    </View>
  );
}
