import { Text, View } from "react-native";

import MealModel from "models/meal";

interface MealItemProps {
  meal: MealModel;
}
function MealItem({ meal }: MealItemProps) {
  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
}

export default MealItem;
