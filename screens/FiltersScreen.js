import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FiltersScreen = (props) => {
  return (
    <View style={styles.FiltersScreen}>
      <Text>The FiltersScreen Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  FiltersScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiltersScreen;
