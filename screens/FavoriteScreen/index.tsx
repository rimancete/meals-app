import MealsList from "components/MealsList";
import { MEALS } from "data/dummyData";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "store/context/favorites-context";
import theme from "styles/theme";

function FavoriteScreen() {
  const { favoriteMealIds } = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (!favoriteMeals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList mealsData={favoriteMeals} />;
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme().colors.secondary.xLight
    }
});

export default FavoriteScreen;
