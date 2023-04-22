import { FlatList, ListRenderItemInfo, useWindowDimensions } from "react-native";
import { CATEGORIES } from "data";
import { CategoryModel } from "models";
import CategoryGridTile from "components/CategoryGridTile";
import { getLandscapeLayout } from "utils/index";

const renderItem = (itemData: ListRenderItemInfo<CategoryModel>) => {
  const { item } = itemData;
  return <CategoryGridTile title={item.title} color={item.color} />;
};
function CategoriesScreen() {
  const { height } = useWindowDimensions();
    const isLandscape = getLandscapeLayout(height);

  const keyExtractor = (item: CategoryModel) => item.id;

  const gridColumns = () => isLandscape ? 3 : 2

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
