import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage}
                            source={require('../../assets/images/user.png')}/>
                    </View>
                    <Text style={styles.cardName}>John Doe</Text>
                    <Text style={styles.cardTitle}>React Native Developer</Text>
                    <Text style={styles.cardBio}>
                        John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.
                    </Text>
                </View>
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        padding: 15
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15
    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white'
    },
    cardTitle: {
        fontSize: 14,
        marginTop: 5,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    cardBio: {
        fontSize: 13,
        textAlign: 'justify',
        marginTop: 15,
        paddingHorizontal: 10
    }
});