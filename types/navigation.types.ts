import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { DrawerParamList, RootStackParamList } from "App";

export type CategoriesScreenNavigationProps = NativeStackScreenProps<DrawerParamList & RootStackParamList, 'MealsCategories'>;
export type FavoriteScreenNavigationProps = NativeStackScreenProps<DrawerParamList, 'FavoriteScreen'>;
export type MealsOverviewScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;
export type MealDetailScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

export type MealDetailScreenNavigationHookProps = CompositeNavigationProp<
  BottomTabNavigationProp<RootStackParamList, 'MealDetail'>,
  NativeStackNavigationProp<RootStackParamList>
>;
