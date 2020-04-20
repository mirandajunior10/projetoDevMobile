import React from 'react';
import { Platform } from 'react-native';
import { Icon } from "react-native-elements";
import BurgerMenu from "../components/BurgerMenu";
import HomeScreen from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import SettingsScreen from '../screens/Settings';
import PasswordResetScreen from '../screens/PasswordReset';
import RegisterScreen from '../screens/Register';
import LoginScreen from '../screens/Login';
import { createStackNavigator } from 'react-navigation-stack'; // Remember to import the other navigators later
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from "react-navigation-drawer";
import { NavigationContainer } from '@react-navigation/native';




//const IOS_MODAL_ROUTES = ["OptionsScreen"];


//Função pra transição dinâmica, para lidar com IOS e Android - não utilizado
/* let dynamicModalTransition = (transitionProps, prevTransitionProps) => {
    const isModal = IOS_MODAL_ROUTES.some(
        screenName =>
            screenName === transitionProps.scene.route.routeName ||
            (prevTransitionProps &&
                screenName === prevTransitionProps.scene.route.routeName)
    );
    return StackViewTransitionConfigs.defaultTransitionConfig(
        transitionProps,
        prevTransitionProps,
        isModal
    );
}; */


const SettingsStack = createStackNavigator(
    { SettingsScreen });

 
SettingsStack.navigationOptions = {
    tabBarLabel: "Settings",
    tabBarIcon: ({ tintColor }) => <Icon name="ios-cog" type="ionicon" color={tintColor} />,
    drawerLabel: "Settings",
    drawerIcon: ({ tintColor }) => <Icon name="md-cog" type="ionicon" color={tintColor} />,
  };
  

 const HomeStack = createStackNavigator(
    { HomeScreen },
    {
        initialRouteName: "HomeScreen",
    });
 


    HomeStack.navigationOptions = {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" type="ionicon" color={"white"} />
        ),
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => <Icon name="md-home" type="ionicon" color={"white"} />,
        
      };


const MainNavigator = Platform.select({
    ios: createBottomTabNavigator({ HomeStack, SettingsStack }),
    android: createDrawerNavigator({ HomeStack, SettingsStack }, 
        {
            drawerBackgroundColor: '#00C79C',
            contentOptions: {
            
                labelStyle: {
                    color: 'white',
                },
              },
              contentComponent: BurgerMenu 

        }
    )
});

const LoginStack = createStackNavigator({ LoginScreen, PasswordResetScreen });

LoginStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarLabel: "Login",
      tabBarIcon: ({ tintColor }) => {
        let iconName = Platform.select({ ios: "ios-log-in", android: "md-log-in" });
        return <Icon name={iconName} type="ionicon" color={tintColor} />;
      },
      tabBarVisible
    };
  };

const AuthTabs = createBottomTabNavigator({ LoginStack, RegisterScreen });  

const RootSwitch = createSwitchNavigator({ LoadingScreen, AuthTabs, MainNavigator });

export default createAppContainer(RootSwitch);

