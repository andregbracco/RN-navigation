import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {HamburgerMenu, PrimaryButton} from '../../components/shared';
import type {RootStackParams} from '../../routes/StackNavigation';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Productos"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
};
