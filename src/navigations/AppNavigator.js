
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import User from '../screens/User';
import AddUsers from '../screens/AddUsers';

const Stack=createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='User' component={User} options={{headerShown:false}}/>
            <Stack.Screen name='AddUsers' component={AddUsers} />

            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator