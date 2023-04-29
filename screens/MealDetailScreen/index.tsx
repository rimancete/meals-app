import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { MEALS } from "data/dummyData";
import { MealDetailScreenNavigationProps } from "types";
import MealDetails from "components/MealDetails";
import SubtTitle from "components/SubTitle";
import MealDetailList from "components/MealDetailList";

export interface MealDetailScreenParams {
  mealId: string;
}

function MealDetailScreen({ navigation }: MealDetailScreenNavigationProps) {
  const { mealId } = useRoute().params as MealDetailScreenParams;

  const selectedMeal = MEALS.find((meal) => mealId === meal.id);
  useLayoutEffect(() => {
    const mealTile = MEALS.find((category) => category.id === mealId)?.title;

    navigation.setOptions({
      title: mealTile || "",
    });
  }, [mealId, navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      {selectedMeal && (
        <MealDetails meal={selectedMeal} textStyle={styles.detailText} />
      )}
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubtTitle title="Ingredients" />
          {selectedMeal && <MealDetailList data={selectedMeal.ingredients} />}
          <SubtTitle title="Steps" />
          {selectedMeal && <MealDetailList data={selectedMeal.steps} />}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

export default MealDetailScreen;
