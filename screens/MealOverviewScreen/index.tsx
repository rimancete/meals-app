import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { MEALS } from "data";
import { MealModel } from "models";
import { getLandscapeLayout } from "utils/index";
import { useRoute } from "@react-navigation/native";
import MealItem from "components/MealItem";

export interface MealsOverviewScreenParams {
  categoryId: string;
}
function MealsOverviewScreen() {
  const { categoryId } = useRoute().params as MealsOverviewScreenParams;

  const mealsData = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0
  );

  // const { height } = useWindowDimensions();
  //   const isLandscape = getLandscapeLayout(height);

  const keyExtractor = (item: MealModel) => item.id;

  // const gridColumns = () => isLandscape ? 3 : 2

  const renderItem = (itemData: ListRenderItemInfo<MealModel>) => {
    const { item } = itemData;

    // const mealItemPressHandler = () => {
    //   navigation.navigate("MealsOverview", {
    //     categoryId: item.id,
    //   });
    // };
    return <MealItem meal={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        // numColumns={gridColumns()}
        // key={gridColumns()}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
