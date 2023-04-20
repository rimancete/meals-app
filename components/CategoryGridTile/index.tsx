import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewProps,
  Platform,
} from "react-native";

import { CategoryModel } from "models/index";

interface CategoryGridTile extends ViewProps {
  title: CategoryModel["title"];
  color: CategoryModel["color"];
}
function CategoryGridTile({ title, color }: CategoryGridTile) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#b9b9b9" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",

    //ios shadow
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
