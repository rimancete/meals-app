import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { DrawerStackParamList, RootStackParamList } from "App";

export type CategoriesScreenNavigationProps = NativeStackScreenProps<DrawerStackParamList, 'MealsCategories'>;
export type FavoriteScreenNavigationProps = NativeStackScreenProps<DrawerStackParamList, 'FavoriteScreen'>;
export type MealsOverviewScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;
export type MealDetailScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

export type MealDetailScreenNavigationHookProps = CompositeNavigationProp<
  BottomTabNavigationProp<RootStackParamList, 'MealDetail'>,
  NativeStackNavigationProp<RootStackParamList>
>;
