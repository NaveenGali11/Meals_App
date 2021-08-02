import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavoritesScreen = (props) => {
  return (
    <View style={styles.FavouritesScreen}>
      <Text>The FavouritesScreen Page</Text>
    </View>
  );
};

// FavouritesScreen.navigationOptions = {
//   head
// }

const styles = StyleSheet.create({
  FavouritesScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
