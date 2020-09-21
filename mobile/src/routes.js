import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/incidents';
import Detail from './pages/detail';
import Detail2 from './pages/detail2';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="Detail2" component={Detail2} />
            </AppStack.Navigator>

        </NavigationContainer>
    )
}