import * as React from 'react';
import { Button, View, useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//icon import
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//import
import Dashboard from '../screen navigation/dashboard';
import Widget from '../screen navigation/Widget';
import Charts from '../screen navigation/Charts';
import Calender from '../screen navigation/Calender';
import {Drawercontent} from './drawercontent';


//for stack navigation
const DashboardStack = createStackNavigator();
const WidgetStack = createStackNavigator();
const ChartStack = createStackNavigator();
const CalenderStack = createStackNavigator();


//stack navigation function
const DashboardScreen =({navigation})=>{
  return(
    <DashboardStack.Navigator
  screenOptions={{
    headerStyle:{
      backgroundColor:'#ffa726'
    },
    headerTintColor:'white',
    headerTitleStyle:{
      fontWeight:'bold'
    },
    headerLeft:()=>(
      <Ionicons.Button name="ios-menu" size={24} color="white" backgroundColor='#ffa726' onPress={()=>navigation.openDrawer()}/>
      // <Button
      //     onPress={() => alert('This is a button!')}
      //     title="Info"
      //     color="#fff"
      //   />
    )
  }}
  >
    <DashboardStack.Screen
     name="Dashboard"
    component={Dashboard}/>
  </DashboardStack.Navigator>
  );
}

const WidgetScreen =({navigation})=>{
  return(
    <WidgetStack.Navigator
  screenOptions={{
    headerStyle:{
      backgroundColor:'#ffa726'
    },
    headerTintColor:'white',
    headerTitleStyle:{
      fontWeight:'bold'
    },
    headerLeft:()=>(
      <Ionicons.Button name="ios-menu" size={24} color="white" backgroundColor='#ffa726' onPress={()=>navigation.openDrawer()}/>
      // <Button
      //     onPress={() => alert('This is a button!')}
      //     title="Info"
      //     color="#fff"
      //   />
    )
  }}
  >
    <WidgetStack.Screen name="Widget" component={Widget}/>
  </WidgetStack.Navigator>
  );
}

const ChartScreen =({navigation})=>{
  return(
    <ChartStack.Navigator
  screenOptions={{
    headerStyle:{
      backgroundColor:'#ffa726'
    },
    headerTintColor:'white',
    headerTitleStyle:{
      fontWeight:'bold'
    },
    headerLeft:()=>(
      <Ionicons.Button name="ios-menu" size={24} color="white" backgroundColor='#ffa726' onPress={()=>navigation.openDrawer()}/>
      // <Button
      //     onPress={() => alert('This is a button!')}
      //     title="Info"
      //     color="#fff"
      //   />
    )
  }}
  >
    <ChartStack.Screen name="Charts" component={Charts}/>
  </ChartStack.Navigator>
  );
}

const CalenderScreen =({navigation})=>{
  return(
    <CalenderStack.Navigator
  screenOptions={{
    headerStyle:{
      backgroundColor:'#ffa726'
    },
    headerTintColor:'white',
    headerTitleStyle:{
      fontWeight:'bold'
    },
    headerLeft:()=>(
      <Ionicons.Button name="ios-menu" size={24} color="white" backgroundColor='#ffa726' onPress={()=>navigation.openDrawer()}/>
      // <Button
      //     onPress={() => alert('This is a button!')}
      //     title="Info"
      //     color="#fff"
      //   />
    )
  }}
  >
    <CalenderStack.Screen name="Calender" component={Calender}/>
  </CalenderStack.Navigator>
  );
}

//for drawer navigation
const Drawer = createDrawerNavigator();





export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="DashboardScreen"
        // inactiveTintColor
        drawerContent={props =><Drawercontent {...props}/>}
        drawerContentOptions={{
          activeTintColor: '#ffa726',
          activeBackgroundColor: 'white',
          itemStyle: { marginVertical: 10, borderRadius: 10 },
          
        }}
        drawerStyle={{
          backgroundColor: '#ffa726',
          width: 250,
          
        }}
      >
         <Drawer.Screen name="DashboardScreen" component={DashboardScreen}/>
         <Drawer.Screen name="Widget" component={WidgetScreen}/>
         <Drawer.Screen name="Charts"component={ChartScreen} />
         <Drawer.Screen name="Calender" component={CalenderScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}