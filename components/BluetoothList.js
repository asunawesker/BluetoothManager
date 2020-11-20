import * as React from 'react';
import { View, Text, FlatList, Switch, StyleSheet } from 'react-native';

const Item = ({ title }) => (
    <View style = {styles.container}>
      <Text style = {styles.name}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2B2A2B',
        borderBottomColor: '#e1e1e1',
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginHorizontal: 30,
        marginVertical: 10,
        borderRadius: 18,
    },
    name: {
        fontSize: 18,
        color: 'white'
    },
});

export default Item;