import React, { useEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-dash";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultTextComponent";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealsDetailsScreen = (props) => {
  const avaliableMeals = useSelector((state) => state.meals.meals);

  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = avaliableMeals.find((meal) => meal.id === mealId);

  // useEffect(() => {
  //   props.navigation.setParams({
  //     mealTitle: selectedMeal.title,
  //   });
  // }, [selectedMeal]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText style={styles.defaultText}>
          {selectedMeal.duration}m
        </DefaultText>
        <DefaultText style={styles.defaultText}>
          {selectedMeal.complexity.toUpperCase()}
        </DefaultText>
        <DefaultText style={styles.defaultText}>
          {selectedMeal.affordability.toUpperCase()}
        </DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealsDetailsScreen.navigationOptions = (navigationData) => {
  const mealID = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  // const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  return {
    headerTitle: mealTitle,
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
  image: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  defaultText: {
    color: "#555ccc",
    fontWeight: "bold",
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    backgroundColor: "#ccc555",
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 15,
    backfaceVisibility: "visible",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealsDetailsScreen;
