import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigation} from './presentation/routes/StackNavigation';
import { SideMenuNavigation } from './presentation/routes/SideMenuNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigation />
    </NavigationContainer>
  );
};
