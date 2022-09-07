import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import First from './firs'
import Second from './Second';
import { Box, Text } from 'native-base';
import Third from './Third';
import Four from './four';
import Five from './Five';

const Tabs = createMaterialTopTabNavigator();
function TopTab({ data, navigation }) {
    return (
        <Box h={'100%'} backgroundColor='#181A18'>
            <Tabs.Navigator
                initialRouteName="First"
                tabBarPosition='top'
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 10, marginBottom: 40 },
                    tabBarStyle: { backgroundColor: '#181A18', height: 35, },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'grey'
                }}

            // tabBar={() => console.log('hello')}



            >
                <Tabs.Screen
                    name="First"
                    component={First}
                    options={{
                        tabBarLabel: 'First',
                        tabBarIndicator: () => console.log('hello'),
                        tabBarIndicatorStyle: { backgroundColor: 'red' },
                        tabBarBounces: true
                    }}
                />
                <Tabs.Screen
                    name="Second"
                    component={Second}
                    options={{
                        tabBarLabel: 'Second',
                        tabBarIndicator: () => console.log('hello second'),
                    }}
                />
                <Tabs.Screen
                    name="Third"
                    component={Third}
                    options={{
                        tabBarLabel: 'Third',
                        tabBarIndicator: () => console.log('hello second'),
                    }}
                />
                <Tabs.Screen
                    name="Four"
                    component={Four}
                    options={{
                        tabBarLabel: 'Four',
                        tabBarIndicator: () => console.log('hello second'),
                    }}
                />
                <Tabs.Screen
                    name="Five"
                    component={Five}
                    options={{
                        tabBarLabel: 'Five', tabBarIndicator: () => console.log('hello second'),
                    }}
                />
            </Tabs.Navigator>

        </Box>
    )
}

export default TopTab