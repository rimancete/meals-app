import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewProps,
  Platform,
  GestureResponderEvent,
} from "react-native";

import { CategoryModel } from "models/index";
import theme from "styles/theme";

interface CategoryGridTileProps extends ViewProps {
  title: CategoryModel["title"];
  color: CategoryModel["color"];
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}

function CategoryGridTile({ title, color, onPress }: CategoryGridTileProps) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#b9b9b9" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
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
    ...theme().ioShadow,
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
