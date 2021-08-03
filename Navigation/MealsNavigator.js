import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailsScreen from "../screens/MealsDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
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
              tabBarLabel:
                Platform.OS === "android" ? (
                  <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
                ) : (
                  "Meals"
                ),
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
              tabBarLabel:
                Platform.OS === "android" ? (
                  <Text style={{ fontFamily: "open-sans-bold" }}>
                    Favorites
                  </Text>
                ) : (
                  "Favourites"
                ),
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
            labelStyle: {
              fontFamily: "open-sans-bold",
            },
            activeTintColor: Colors.accentColor,
          },
        }
      );

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    // navigationOptions: {
    //   drawerLabel: "Filters !!",
    // },
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
        paddingTop: 20,
      },
    },
  }
);

export default createAppContainer(MainNavigator);
