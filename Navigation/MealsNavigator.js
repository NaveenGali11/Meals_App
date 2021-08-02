import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailsScreen from "../screens/MealsDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealsDetails: {
      screen: MealsDetailsScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetails: MealsDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(
        {
          Meals: {
            screen: MealsNavigator,
            navigationOptions: {
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="ios-restaurant"
                    size={25}
                    color={tabInfo.tintColor}
                  />
                );
              },
              tabBarColor: Colors.primaryColor,
            },
          },
          Favorites: {
            screen: FavNavigator,
            navigationOptions: {
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="ios-star"
                    size={25}
                    color={tabInfo.tintColor}
                  />
                );
              },
              tabBarColor: Colors.accentColor,
            },
          },
        },
        {
          activeColor: "white",
          shifting: true,
        }
      )
    : createBottomTabNavigator(
        {
          Meals: {
            screen: MealsNavigator,
            navigationOptions: {
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="ios-restaurant"
                    size={25}
                    color={tabInfo.tintColor}
                  />
                );
              },
              tabBarColor: Colors.primaryColor,
            },
          },
          Favorites: {
            screen: FavNavigator,
            navigationOptions: {
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="ios-star"
                    size={25}
                    color={tabInfo.tintColor}
                  />
                );
              },
              tabBarColor: Colors.accentColor,
            },
          },
        },
        {
          tabBarOptions: {
            activeTintColor: Colors.accentColor,
          },
        }
      );

export default createAppContainer(MealsFavTabNavigator);
