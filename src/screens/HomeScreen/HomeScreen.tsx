import { View, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './HomeScreen.styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { INavigationProps } from '../../navigation/INavigationProps'

const HomeScreen: FC<INavigationProps> = ({ navigation, route }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Home Screen</Text>
		</SafeAreaView>
	)
}

export default HomeScreen