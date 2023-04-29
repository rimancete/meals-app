import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import CategoriesScreen from "screens/CategoriesScreen/";
import MealsOverviewScreen, {
  MealsOverviewScreenParams,
} from "screens/MealOverviewScreen";
import MealDetailScreenScreen, {
  MealDetailScreenParams,
} from "screens/MealDetailScreen";
import theme from "styles/theme";

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: MealsOverviewScreenParams;
  MealDetail: MealDetailScreenParams;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: theme().colors.secondary.dark },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ navigation, route }) => {
            //   const {categoryId} = route.params;
            //   return {
            //     title: categoryId
            //   };
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreenScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
