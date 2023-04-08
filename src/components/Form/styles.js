import {StyleSheet} from 'react-native'	

const styles = StyleSheet.create({
	formContext: {
		width: '100%',
		height: '100%',
		bottom: 0,
		backgroundColor: '#fff',
		alignItems: 'center',
		marginTop: 30,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30
	},
	form: {
		width: '100%',
		height: 'auto',
		marginTop:40,
		paddingLeft: 10
	},
	formLabel: {
		color: '#000',
		fontSize: 18,
		paddingLeft: 20,
	},
	formInput:{
		width: '90%',
		height: 40,
		borderRadius: 50,
		backgroundColor: '#f6f6f6',
		margin: 12,
		paddingLeft: 10
	},
	formButton: {
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		backgroundColor: '#ff0043',
		paddingTop: 14,
		paddingBottom: 14,
		marginLeft: 12,
		marginTop: 30
	},
	formButtonText: {
		fontSize: 20,
		color: '#fff'
	}
})

export default styles