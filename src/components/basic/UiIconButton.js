import { IconButton } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import EfficientBlurViewCard from "./EfficientBlurViewCard";

export const UiIconButton = ({ icon, onPress, style, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <EfficientBlurViewCard
        containerStyle={{
          borderRadius: 50,
          height: 50,
          width: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        {...props}
      >
        {icon}
      </EfficientBlurViewCard>
    </TouchableOpacity>
  );
};
