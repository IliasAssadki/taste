import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Film } from "./components/Film.js"


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


function SeeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SeeScreen screen</Text>
      <Button
        title="Go to les details"
        onPress={() => navigation.navigate('Details')}
      />
      <Film />
    </View>
  );
}


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const SeeStack = createNativeStackNavigator();

function SeeStackScreen() {
  return (
    <SeeStack.Navigator screenOptions={{ headerShown: true }}>
      <SeeStack.Screen name="See" component={SeeScreen} />
      <SeeStack.Screen name="Details" component={DetailsScreen} />
    </SeeStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} options=
          {{
            title: "logine1"
          }}/>
        <Tab.Screen name="Settings" component={SettingsStackScreen} options=
          {{
            title: "logine2"
          }} />
        <Tab.Screen name="Se" component={SeeStackScreen} options=
          {{
            title: "logine3"
          }} />

      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

export default App