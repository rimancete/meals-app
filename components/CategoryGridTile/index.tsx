import { Pressable, Text, View, ViewProps } from "react-native";

import { CategoryModel } from "../../models/index";

interface CategoryGridTile extends ViewProps {
    title: CategoryModel['title'],
    color: CategoryModel['color'],
}
function CategoryGridTile({ title, color }: CategoryGridTile) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
