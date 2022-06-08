import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesListScreen from "./CategoriesListScreen";
import ProductsListScreen from "./ProductsListScreen";

export type MainStackParamList = {
	CategoriesList: undefined;
	ProductsList: {
		productsListId: number;
	};
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigation: React.VFC = () => {
	return (
		<MainStack.Navigator>
			<MainStack.Screen
				name="CategoriesList"
				component={CategoriesListScreen}
			/>
			<MainStack.Screen name="ProductsList" component={ProductsListScreen} />
		</MainStack.Navigator>
	);
};

export default MainStackNavigation;
