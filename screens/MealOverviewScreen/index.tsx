import { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";

import { CATEGORIES, MEALS } from "data";
import { MealsOverviewScreenNavigationProps } from "types";
import { MealsList } from "components";

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

  useLayoutEffect(() => {
    const categoryTile = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTile || "",
    });
  }, [categoryId, navigation]);

  return <MealsList mealsData={mealsData} />;
}

export default MealsOverviewScreen;
