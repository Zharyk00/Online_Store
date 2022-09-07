import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign, SimpleLineIcons, Ionicons } from 'react-native-vector-icons';
import { Box, HStack, Icon, NativeBaseProvider, StatusBar, Text, VStack } from 'native-base';
import Home from "./Pages/Home";
import Message from "./Pages/Message";
import Like from "./Pages/Like";
import About from "./Pages/About";

export default function App() {
  const Tab = createMaterialBottomTabNavigator()
  return (

    <NativeBaseProvider>
      <StatusBar />
      <VStack space={5} bg={'#181A18'}>
        <HStack px={3} pt={3} justifyContent={'space-between'} alignItems='center' backgroundColor={'#181A18'} height={'10'}>
          <Icon as={AntDesign} name="menufold" color="white" size={'lg'} />
          <Text fontSize={'md'} color='white'>Hello World</Text>
        </HStack>
      </VStack>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor='white'

        >
          <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (<SimpleLineIcons name="home" color={'#f3e3d3'} size={20} />),
            tabBarColor: '#744c24'
          }} />

          <Tab.Screen name="Message" component={Message}
            options={{
              tabBarLabel: 'Message',
              tabBarBadge: true,
              tabBarIcon: () => (<AntDesign name="message1" color={'#f3e3d3'} size={20} />),
              tabBarColor: '#8e5431'
            }} />

          <Tab.Screen name="Like" component={Like} options={{
            tabBarLabel: 'Like',
            tabBarIcon: () => (<AntDesign name="hearto" color={'#f3e3d3'} size={20} />),
            tabBarColor: '#9b6b43'
          }} />

          <Tab.Screen name="About" component={About} options={{
            tabBarLabel: 'About',
            tabBarIcon: () => (<Ionicons name="md-person-outline" color={'#f3e3d3'} size={20} />),
            tabBarColor: '#c98860'
          }} />

        </Tab.Navigator>

      </NavigationContainer>

    </NativeBaseProvider >

  );
}


