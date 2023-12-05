import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Orientation from "react-native-orientation-locker";

type IAProps = {};
export const App: React.FC<IAProps> = () => {
    useEffect(() => {
        Orientation.lockToLandscape();
    }, []);
    return (
        <View style={styles.container}>
            <Height/>
        </View>
    );
}

const Height: React.FC = () => {
    return (
        <View style={styles.contentContainer}>
            <View style={styles.content}>
                {/*<Text style={styles.text}>里面的内容</Text>*/}
                <View style={styles.item}>

                </View>
                <View style={styles.item}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    contentContainer: {
        // TODO set width && height
        width: '100%',
        height: '100%',


        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
    },
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    item: {
        width: '50%',
        height: '50%',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'blue'
    }
});
