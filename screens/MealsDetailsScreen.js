import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const MealsDetilsScreen = (props) => {
  return (
    <View style={styles.MealsDetilsScreen}>
      <Text>The MealsDetilsScreen Page</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MealsDetilsScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealsDetilsScreen;
