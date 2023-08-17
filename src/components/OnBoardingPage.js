import { useNavigation } from '@react-navigation/native';
import { Button, View, Text } from 'react-native';

const OnBoardingPage = ({ page }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>{page}</Text>
    </View>
  );
};

export default OnBoardingPage;
