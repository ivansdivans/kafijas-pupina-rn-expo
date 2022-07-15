import React from "react";
import { View, Text } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { MainStackParamList } from "../index";
import AppScreen from "../../../components/AppScreen";
import ListItem from "../../../components/ListItem";

const ProductsListScreen: React.VFC = () => {
	const route = useRoute<RouteProp<MainStackParamList, "ProductsList">>();

	return (
		<AppScreen>
			<Text>ProductsListScreen</Text>
			<Text>categoryName {route.params.categoryName}</Text>
			<Text>productsListId {route.params.productsListId}</Text>
			<ListItem
				onPress={() => console.log("List item pressed")}
				imageSource={route.params.products[0].imageSource}
				title={route.params.products[0].title}
				description={route.params.products[0].description}
				price={route.params.products[0].price}
				discount={route.params.products[0].discount}
			/>
		</AppScreen>
	);
};

export default ProductsListScreen;
