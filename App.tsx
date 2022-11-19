import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Authentication from './src/screens/Authentication'
import Login from './src/screens/LogIn'
import MyPets from './src/screens/MyPets'
import Signup from './src/screens/SignUp'
import Welcome from './src/screens/Welcome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Notifications from './src/screens/Notifications'
import Profile from './src/screens/Profile'
import PetRegistration from './src/screens/PetRegistration'
import PetProfile from './src/screens/PetProfile'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Home() {
  return (
    <Tab.Navigator initialRouteName="My pets">
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="My pets" component={MyPets} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authentication">
        {/* Onboarding */}
        <Stack.Group>
          <Stack.Screen
            name="Authentication"
            component={Authentication}
            options={{ headerShown: false, statusBarColor: '#045A7C' }}
          />
          <Stack.Screen name="Log in" component={Login} />
          <Stack.Screen
            name="Sign Up"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Group>
        {/* Main App */}
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Register my pet" component={PetRegistration} />
          <Stack.Screen name="Pet profile" component={PetProfile} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
