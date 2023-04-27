import { useLayoutEffect } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

import { MEALS, CATEGORIES } from "data";
import { MealModel } from "models";
import { useRoute } from "@react-navigation/native";
import MealItem from "components/MealItem";
import { MealsOverviewScreenNavigationProps } from "types";

export interface MealsOverviewScreenParams {
  categoryId: string;
}

function MealsOverviewScreen({
  navigation,
}: MealsOverviewScreenNavigationProps) {
  const { categoryId } = useRoute().params as MealsOverviewScreenParams;

  const mealsData = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0
  );

  const keyExtractor = (item: MealModel) => item.id;

  const renderItem = (itemData: ListRenderItemInfo<MealModel>) => {
    const { item } = itemData;

    return <MealItem meal={item} />;
  };

  useLayoutEffect(() => {
    const categoryTile = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTile || "",
    });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
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
