import { View } from "native-base";
import { Image } from "react-native";
import LogoImage from "../../assets/images/Stride_Logo_White.png";
import LogoImageBlue from "../../assets/images/Stride_Logo_blue.png";

const Logo = ({ size = 60, isBlue = false }) => {
  return (
    <View padding={5}>
      {isBlue ? (
        <Image
          source={LogoImageBlue}
          resizeMode="contain"
          style={{ height: size / 3, width: size }}
        />
      ) : (
        <Image
          source={LogoImage}
          resizeMode="contain"
          style={{ height: size / 3, width: size }}
        />
      )}
    </View>
  );
};

export default Logo;
