import {View, Text} from 'react-native';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';
import {IonIcon} from '../../components/shared/IonIcon';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>

      <IonIcon name="rocket-outline" size={40} color="#900" />
    </View>
  );
};
