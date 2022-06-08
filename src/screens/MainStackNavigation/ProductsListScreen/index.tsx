import React from "react";
import { View, Text } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { MainStackParamList } from "../index";

const ProductsListScreen: React.VFC = () => {
	const route = useRoute<RouteProp<MainStackParamList, "ProductsList">>();

	return (
		<View>
			<Text>ProductsListScreen</Text>
			<Text>productsListId {route.params.productsListId}</Text>
		</View>
	);
};

export default ProductsListScreen;
