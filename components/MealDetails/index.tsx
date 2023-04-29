import MealModel from "models/meal";
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewProps } from "react-native";

interface MealDetailsProps extends ViewProps {
  meal: MealModel;
  textStyle?: StyleProp<TextStyle>;
}

function MealDetails({ meal, style, textStyle }: MealDetailsProps) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{meal.duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{meal.complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{meal.affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealDetails;
