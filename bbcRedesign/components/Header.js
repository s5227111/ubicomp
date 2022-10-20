const { View, Image, StyleSheet, Text } = require("react-native")

{/* Header component */}
const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.centerLogo}>
                <Image style={styles.logo} source={require('../assets/logo.jpg')} />
            </View>
            <View style={styles.menu}>
                <Text style={styles.itemMenu}>Top Stories</Text>
                <Text style={styles.itemMenu}>My News</Text>
                <Text style={styles.itemMenu}>Popular</Text>
                <Text style={styles.itemMenu}>Videos</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        height: 50,
        width: 150
    },
    header:{
        backgroundColor: "#dc1609",
        width: "100%",
        justifyContent: "center",
        height: 150,
        paddingTop: 50
    },
    menu:{
        flex:4,
        backgroundColor: "#dc1609",
        width: "100%",
        justifyContent: "center",
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    itemMenu:{
        color: 'white',
        fontWeight:"bold"
    },
    centerLogo:{
        flex:1,
        flexDirection: "row",
        justifyContent: "center"
    }
})

export default Header