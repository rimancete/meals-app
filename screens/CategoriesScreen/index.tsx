import { FlatList, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "data";
import { CategoryModel } from "models";
import CategoryGridTile from "components/CategoryGridTile";

const renderItem = (itemData: ListRenderItemInfo<CategoryModel>) => {
  const { item } = itemData;
  return <CategoryGridTile title={item.title} color={item.color} />;
};
function CategoriesScreen() {
  const keyExtractor = (item: CategoryModel) => item.id;

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}

export default CategoriesScreen;
