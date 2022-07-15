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
			{route.params.products.map((product) => (
				<ListItem
					key={product.id}
					onPress={() => console.log("List item pressed")}
					imageSource={product.imageSource}
					title={product.title}
					description={product.description}
					price={product.price}
					discount={product.discount}
				/>
			))}
		</AppScreen>
	);
};

export default ProductsListScreen;
