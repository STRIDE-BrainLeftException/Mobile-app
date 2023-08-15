import { View } from "native-base";
import { Image } from "react-native";
import LogoImage from "../../assets/images/Stride_Logo_White.png";

const Logo = ({ size = 20 }) => {
  return (
    <View padding={5} style={{ backgroundColor: "black" }}>
      <Image
        source={LogoImage}
        resizeMode="contain"
        style={{ height: size, width: size * 3 }}
      />
    </View>
  );
};

export default Logo;
