import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';
import Cart from '../Cart/Cart';
// Icons
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="white"
      inactiveColor="gray"
      barStyle={{ backgroundColor: '#ff7233', height: 70 }}
      >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('../../assets/icons/home.png') : require('../../assets/icons/home.png')}
            style={{ width: 24, height: 24 }}
          />
        ),
      }} />
      <Tab.Screen name="Search" component={Search} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('../../assets/icons/search.png') : require('../../assets/icons/search.png')}
            style={{ width: 24, height: 24 }}
          />
        ),
      }} />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('../../assets/icons/cart.png') : require('../../assets/icons/cart.png')}
            style={{ width: 24, height: 24 }}
          />
        ),
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('../../assets/icons/user.png') : require('../../assets/icons/user.png')}
            style={{ width: 24, height: 24 }}
          />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default TabNavigator;