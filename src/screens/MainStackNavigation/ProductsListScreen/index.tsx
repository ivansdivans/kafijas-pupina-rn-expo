import React from "react";
import { ScrollView, ViewStyle, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { MainStackParamList } from "../index";
import AppScreen from "../../../components/AppScreen";
import ProductsListItem from "../../../components/ProductsListItem";

const ProductsListScreen: React.VFC = () => {
	const route = useRoute<RouteProp<MainStackParamList, "ProductsList">>();

	return (
		<AppScreen>
			<ScrollView style={styles.scrollView}>
				{route.params.products.map((product) => (
					<ProductsListItem
						key={product.id}
						onPress={() => console.log("List item pressed")}
						imageSource={product.imageSource}
						title={product.title}
						description={product.description}
						price={product.price}
						discount={product.discount}
					/>
				))}
			</ScrollView>
		</AppScreen>
	);
};

interface Style {
	scrollView: ViewStyle;
}

const stylesObj: Style = {
	scrollView: {
		marginTop: 10,
		paddingHorizontal: 10,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default ProductsListScreen;
