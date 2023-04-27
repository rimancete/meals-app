import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";

export type CategoriesScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'MealsCategories'>;
export type MealsOverviewScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;
