import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {globalColors} from '../theme/theme';
import {TopTabsNavigation} from './TopTabsNavigation';
import {StackNavigation} from './StackNavigation';
import {IonIcon} from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        sceneStyle: {backgroundColor: globalColors.background},
        headerShown: true,
        tabBarLabelStyle: {marginBottom: 5},
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          // title: '1',
          tabBarIcon: ({color}) => (
            <IonIcon name="alarm-outline" color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          // title: '2',
          tabBarIcon: ({color}) => (
            <IonIcon name="camera-outline" color={color} />
          ),
        }}
        component={TopTabsNavigation}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          // title: '3',
          tabBarIcon: ({color}) => (
            <IonIcon name="rocket-outline" color={color} />
          ),
        }}
        component={StackNavigation}
      />
    </Tab.Navigator>
  );
};
