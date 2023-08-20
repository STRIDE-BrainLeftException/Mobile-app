import { Button } from "native-base";
import { TouchableOpacity } from "react-native";
import { View } from "native-base";
import { BlurView } from "expo-blur";
import { WIDTH } from "../../utils/constants";
import { Text } from "react-native";

//Styles appliable to view
export const UiButton = ({ label = "Continue", onTap, styles = {} }) => {
  return (
    <View style={{ alignItems: "center", ...styles }}>
      <TouchableOpacity
        style={{
          borderRadius: 26,
          overflow: "hidden",
          alignItems: "center",
        }}
        onPress={() => {
          onTap();
        }}
      >
        <BlurView
          style={{
            padding: 12,
            width: WIDTH * 0.6,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "#fff", padding: 4 }}>
            {label}
          </Text>
        </BlurView>
      </TouchableOpacity>
    </View>
  );
};
