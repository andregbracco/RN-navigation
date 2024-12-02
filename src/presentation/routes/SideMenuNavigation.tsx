import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {useWindowDimensions, View} from 'react-native';
import {BottomTabNavigation} from './BottomTabNavigation';
import {IonIcon} from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigation = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: width >= 758 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigation" component={StackNavigation} /> */}
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcon color={color} name="camera-outline" />
          ),
        }}
        name="Tabs"
        component={BottomTabNavigation}
      />
      <Drawer.Screen options={{
          drawerIcon: ({color}) => (
            <IonIcon color={color} name="flashlight-outline" />
          ),
        }} name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
