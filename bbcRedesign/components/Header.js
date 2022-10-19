const { View, Image, StyleSheet } = require("react-native")

{/* Header component */}
const Header = () => {
    return (
        <View>
            <Image style={styles.logo} source={require('../assets/logo.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        height: 50,
        width: 100
    },
    header:{
        backgroundColor: "#dc1609",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        flex: 1
    }
})

export default Header