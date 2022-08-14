import React from "react";
import {
	View,
	ViewStyle,
	TextStyle,
	StyleSheet,
	Image,
	ImageStyle,
} from "react-native";

import AppScreen from "../../components/AppScreen";
import AppIcon from "../../components/AppIcon";
import appStyles from "../../styles/Application";
import Separator from "../../components/Separator";
import SeparatorLine from "../../components/SeparatorLine";
import H2 from "../../components/H2";
import P from "../../components/P";
import LinkText from "../../components/LinkText";
import { openEmailUrl, openPhoneUrl } from "../../helpers/LinkOpener";

const PROFILE = {
	name: "Ivans",
	phone: "+371 28720022",
	email: "mihailovs.ivans@gmail.com",
};

const ProfileScreen: React.VFC = () => (
	<AppScreen>
		<View style={styles.avatarContainer}>
			<Image
				style={styles.avatarImage}
				source={require("../../assets/images/avatar.png")}
			/>
			<H2>{PROFILE.name}</H2>
		</View>
		<Separator height={10} />
		<View>
			<H2>My contact details</H2>
			<Separator height={10} />
			<P style={styles.profileText}>phone: {PROFILE.phone}</P>
			<P style={styles.profileText}>email: {PROFILE.email}</P>
		</View>
		<SeparatorLine height={20} />
		<View>
			<H2>Contact us</H2>
			<Separator height={10} />
			<View style={styles.aboutUsRowContainer}>
				<AppIcon name="clock" size={40} />
				<P style={styles.aboutUsText}>9:00-18:00</P>
			</View>
			<View style={styles.aboutUsRowContainer}>
				<AppIcon name="clock" size={40} />
				<LinkText
					text={"+371 67377844"}
					onPress={() => openPhoneUrl("+371 67377844")}
					style={styles.aboutUsText}
				/>
			</View>
			<View style={styles.aboutUsRowContainer}>
				<AppIcon name="mail" size={40} />
				<LinkText
					text={"info@kafijaspupina.lv"}
					onPress={() => openEmailUrl("info@kafijaspupina.lv")}
					style={styles.aboutUsText}
				/>
			</View>
			<View style={styles.aboutUsRowContainer}>
				<AppIcon name="google-maps" size={40} />
				<P style={styles.aboutUsText}>Plieņciema iela 5, Mārupe, LV-2167</P>
			</View>
		</View>
	</AppScreen>
);

interface Style {
	avatarContainer: ViewStyle;
	avatarImage: ImageStyle;
	profileText: TextStyle;
	aboutUsRowContainer: ViewStyle;
	aboutUsText: TextStyle;
}

const stylesObj: Style = {
	avatarContainer: {
		...appStyles.inlineContainer,
		marginTop: 20,
	},
	avatarImage: {
		height: 80,
		width: 80,
		marginRight: 20,
	},
	profileText: {
		marginVertical: 5,
	},
	aboutUsRowContainer: {
		...appStyles.inlineContainer,
		marginVertical: 5,
	},
	aboutUsText: {
		flexShrink: 1,
		marginLeft: 10,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default ProfileScreen;
