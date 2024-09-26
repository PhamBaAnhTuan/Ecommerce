import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';
import Cart from '../Cart/Cart';
// Context
import { useTheme } from '../../context/ThemeContext';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  // Theme
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      activeColor="white"
      inactiveColor="gray"
      barStyle={{ backgroundColor: '#ff7233', height: 65 }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
						[iconName, color, size] = focused
							? ['home', theme.orange, 24]
							: ['home-outline', 'grey', 24];
					}if (route.name === "Search") {
						[iconName, color, size] = focused
							? ['search', theme.orange, 24]
							: ['search', 'grey', 24];
					}if (route.name === "Cart") {
						[iconName, color, size] = focused
							? ['cart', theme.orange, 24]
							: ['cart-outline', 'grey', 24];
					}if (route.name === "Profile") {
						[iconName, color, size] = focused
							? ['person', theme.orange, 24]
							: ['person-outline', 'grey', 24];
					}
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  );
}

export default TabNavigator;