import * as React from 'react';
import { View, Text, FlatList, Switch, StyleSheet } from 'react-native';

const Subtitle = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Lista de dispositivos</Text>
            <View style = {styles.line}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
    },
    title: {
        paddingLeft: 30,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
    },
    line: {
        borderBottomWidth: 1,
        marginHorizontal: 30,
        flex: 1,
        borderColor: '#ECEFF1',
    },
});

export default Subtitle;