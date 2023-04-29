import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from "App";

export type CategoriesScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'MealsCategories'>;
export type MealsOverviewScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;
export type MealDetailScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;
export type MealDetailScreenNavigationHookProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootStackParamList, 'MealDetail'>,
  NativeStackNavigationProp<RootStackParamList>
>;
