import { View } from "native-base";
import { Image } from "react-native";
import LogoImage from "../../assets/images/Stride_Logo_White.png";
import LogoImageBlue from "../../assets/images/Stride_Logo_blue.png";

const Logo = ({ size = 60, isBlue = false }) => {
  return (
    <View paddingX={5} pt={5}>
      {isBlue ? (
        <Image alt={' '}
          source={LogoImageBlue}
          resizeMode="contain"
          style={{ height: size / 3, width: size }}
        />
      ) : (
        <Image alt={' '}
          source={LogoImage}
          resizeMode="contain"
          style={{ height: size / 3, width: size }}
        />
      )}
    </View>
  );
};

export default Logo;
