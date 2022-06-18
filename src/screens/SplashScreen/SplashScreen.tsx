import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { INavigationProps } from '../../navigation/INavigationProps';

const SplashScreen: FC<INavigationProps> = ({ navigation, route }) => {
	return (
		<View>
			<Text>SplashScreen</Text>
		</View>
	)
}

export default SplashScreen;