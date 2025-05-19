import { View, Text, TouchableOpacity } from "react-native";
import { AlertTriangle, Trash2 } from "react-native-feather";
export default function Exit() {
  return (
    <>
      <View className="mx-4 mb-6">
        <Text className="text-lg text-[#747474] font-Manrope-bold">
          Do you want to exit the portfolio?
        </Text>
        <Text className="text-sm text-gray-500 mt-1 mb-4 font-manrope">
          Exiting will stop all future operations. Your entire portfolio will be
          liquidated, and the total amount will be released after selling all
          current holdings.
        </Text>

        <TouchableOpacity className="flex-row items-center self-end">
          <Trash2 width={22} height={22} color="#E73635" />
          <Text className="text-base text-[#E73635] underline ml-2 font-inter">
            Exit Portfolio
          </Text>
        </TouchableOpacity>
      </View>
      {/* Disclaimer Section */}
      <View className="bg-[#FFF8F5] p-4 ">
        <View className="flex-row">
          <AlertTriangle width={20} height={20} color="#FF6B35" />
          <View className="ml-3 flex-1">
            <Text className="text-base font-inter-semibold">Disclaimer</Text>
            <Text className="font-inter mt-1">
              Withdrawal process sells your current holdings before releasing
              amount. <Text className="font-inter-semibold">View More</Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
