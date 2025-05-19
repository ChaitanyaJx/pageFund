import { View, Text } from "react-native";
import { HelpCircle, AlertTriangle, Trash2 } from "react-native-feather";
interface FinancialData {
  totalAmount: string;
  minimumAmount: string;
  availableAmount: string;
}
export default function Amount() {
  const financialData: FinancialData = {
    totalAmount: "Rs. 10000",
    minimumAmount: "Rs. 1000",
    availableAmount: "Rs. 9000",
  };
  return (
    <>
      <View className="flex-row items-center justify-between bg-[#F8FAFB] p-4 mb-4 ">
        <Text className="flex-1 text-[#20263C] font-inter">
          Frequently Asked Questions about Withdrawal
        </Text>
        <HelpCircle width={24} height={24} color="#253174" />
      </View>
      {/* Financial Information Cards */}
      <View className="mx-4 mb-6">
        {/* Total Amount Card */}
        <View className="border border-[#E0E0E0] rounded-lg p-4 space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className="text-base text-black">Total Amount</Text>
            <Text className="text-base text-black font-semibold">
              {financialData.totalAmount}
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-base text-[#E86A34]">
              Minimum Amount <Text className="text-sm">(Required)</Text>
            </Text>
            <Text className="text-base text-[#E86A34] font-semibold">
              {financialData.minimumAmount}
            </Text>
          </View>
        </View>

        {/* Available Amount Card */}
        <View className="bg-gray-100 rounded-lg p-4 mt-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-base text-black font-medium">
              Available Amount
            </Text>
            <Text className="text-base text-black font-medium">
              {financialData.availableAmount}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
