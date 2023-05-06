import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import CategoriesScreen from "screens/CategoriesScreen/";
import MealsOverviewScreen, {
  MealsOverviewScreenParams,
} from "screens/MealOverviewScreen";
import MealDetailScreenScreen, {
  MealDetailScreenParams,
} from "screens/MealDetailScreen";
import theme from "styles/theme";
import FavoriteScreen from "screens/FavoriteScreen";

export type RootStackParamList = {
  DrawerScreen: undefined;
  MealsOverview: MealsOverviewScreenParams;
  MealDetail: MealDetailScreenParams;
};

export type DrawerParamList = {
  MealsCategories: undefined;
  FavoriteScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme().colors.secondary.dark },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: theme().colors.secondary.medium,
        },
        drawerContentStyle: { backgroundColor: theme().colors.secondary.dark },
        drawerInactiveTintColor: "#fafafa",
        drawerActiveTintColor: theme().colors.secondary.dark,
        drawerActiveBackgroundColor: theme().colors.secondary.xLight,
      }}
    >
      <Drawer.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DrawerScreen"
          screenOptions={{
            headerStyle: { backgroundColor: theme().colors.secondary.dark },
            headerTintColor: "white",
            contentStyle: { backgroundColor: theme().colors.secondary.medium },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              // title: "All Categories",
              headerShown: false,
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
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreenScreen}
            // options={{
            //   headerRight: () => <Button title="Tap me!" />,
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
