import { Button } from "native-base";
import { TouchableOpacity } from "react-native";
import { View } from "native-base";
import { BlurView } from "expo-blur";
import { WIDTH } from "../../utils/constants";
import { Text } from "react-native";

//Styles appliable to view
export const UiButton = ({
  label = "Continue",
  onTap,
  styles = {},
  disabled = false,
  size = 8,
  disabled = false,
}) => {
  return (
    <View style={{ alignItems: "center", ...styles }}>
      <View height={5} />
      <TouchableOpacity
        style={{
          borderRadius: size * 2,
          overflow: "hidden",
          alignItems: "center",
        }}
        onPress={() => {
          onTap();
        }}
        disabled={disabled}
      >
        <BlurView
          style={{
            padding: size - 1,
            width: WIDTH * 0.6,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "#fff", padding: 2 }}>
            {label}
          </Text>
        </BlurView>
      </TouchableOpacity>
    </View>
  );
};
