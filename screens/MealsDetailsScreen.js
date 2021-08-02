import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-dash";
import HeaderButton from "../components/HeaderButton";

const MealsDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.MealsDetailsScreen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back to Categories Meals"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
    </View>
  );
};

MealsDetailsScreen.navigationOptions = (navigationData) => {
  const mealID = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => console.log("Mark as Favourite")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  MealsDetailsScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealsDetailsScreen;
