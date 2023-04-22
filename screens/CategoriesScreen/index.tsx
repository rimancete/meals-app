import {
  FlatList,
  ListRenderItemInfo,
  useWindowDimensions,
} from "react-native";

import { CATEGORIES } from "data";
import { CategoryModel } from "models";
import CategoryGridTile from "components/CategoryGridTile";
import { getLandscapeLayout } from "utils/index";
import { CategoriesScreenNavigationProps } from "types";

function CategoriesScreen({ navigation }: CategoriesScreenNavigationProps) {
  const { height } = useWindowDimensions();
  const isLandscape = getLandscapeLayout(height);

  const keyExtractor = (item: CategoryModel) => item.id;

  const gridColumns = () => (isLandscape ? 3 : 2);

  const renderItem = (itemData: ListRenderItemInfo<CategoryModel>) => {
    const { item } = itemData;

    const mealItemPressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    };
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={mealItemPressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={gridColumns()}
      key={gridColumns()}
    />
  );
}

export default CategoriesScreen;
