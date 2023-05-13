import {
  ListRenderItemInfo,
  FlatList,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import MealModel from "models/meal";
import { getLandscapeLayout } from "utils/index";
import MealItem from "./components/MealItem";

interface MealsListProps {
  mealsData: MealModel[];
}

function MealsList({ mealsData }: MealsListProps) {
  const { height } = useWindowDimensions();
  const isLandscape = getLandscapeLayout(height);

  const keyExtractor = (item: MealModel) => item.id;

  const gridColumns = () => (isLandscape ? 2 : 1);

  const renderItem = (itemData: ListRenderItemInfo<MealModel>) => {
    const { item } = itemData;

    return <MealItem meal={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={gridColumns()}
        key={gridColumns()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsList;
