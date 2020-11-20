import * as React from 'react';
import { View, Text, FlatList, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const Subtitle = ({ title}) => {
    return(
        <TouchableOpacity style = {styles.container}>
            <Text style = {styles.title}>{title}</Text>
            <View style = {styles.line}/>
        </TouchableOpacity>
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