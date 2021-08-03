import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-dash";
import MealList from "../components/MealList";
import { StyleSheet, View } from "react-native";
import DefaultText from "../components/DefaultTextComponent";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const avaliableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = avaliableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText style={styles.contentText}>
          No meals found. Try Changing the filters in the side drawer
        </DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 15,
    fontFamily: "open-sans",
  },
});

export default CategoryMealsScreen;
