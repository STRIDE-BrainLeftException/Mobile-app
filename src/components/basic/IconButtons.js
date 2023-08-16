import { TouchableOpacity } from "react-native";
import BlurViewCard from "./BlurViewCard";
import { Icon } from "native-base";
// import { Image } from "moti";
import { Image } from "react-native";
import rightIcon from "../../assets/icons/right_arrow.png";
import { BlurView } from "expo-blur";

export const IconButton = ({ size, source, onPress, imageStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 50,
        overflow: "hidden",
        height: size,
        width: size,
        borderWidth: 1.5,
        borderColor: "rgba(255,255,255,0.2)",
      }}
    >
      <BlurView
        intensity={10}
        style={{
          height: size,
          width: size,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={source}
          // height={size}
          // width={size}
          resizeMode="contain"
          style={[{ height: size - 20, width: size - 20 }, imageStyle]}
        />
      </BlurView>
    </TouchableOpacity>
  );
};

const ICON_BUTTON_SIZE = 60;

export const BackButton = ({ onPress = () => {} }) => {
  return (
    <IconButton size={ICON_BUTTON_SIZE} source={rightIcon} onPress={onPress} />
  );
};

export const ForwardButton = ({ onPress = () => {} }) => {
  return (
    <IconButton
      size={ICON_BUTTON_SIZE}
      source={rightIcon}
      onPress={onPress}
      imageStyle={{transform: [{ rotate: '180deg' }]}}
    />
  );
};
