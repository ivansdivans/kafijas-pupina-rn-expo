import React from "react";
import { View } from "react-native";

interface Props {
	height?: number;
}

const Separator: React.VFC<Props> = ({ height = 10 }) => (
	<View style={{ width: "100%", height: height }} />
);

export default Separator;
