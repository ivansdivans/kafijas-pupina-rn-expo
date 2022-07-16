import { Linking } from "react-native";

//TODO: add Logger
export const openEmailUrl: (email: string) => void = (email) => {
	Linking.openURL(`mailto:${email}`).catch((error) =>
		console.log("Error during openEmailUrl: ", error)
	);
};

export const openPhoneUrl: (phone: string) => void = (phone) => {
	Linking.openURL(`tel:${phone}`).catch((error) =>
		console.log("Error during openPhoneUrl: ", error)
	);
};
